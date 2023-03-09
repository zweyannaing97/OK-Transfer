
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as _ from 'lodash';
import { environment } from './../../../environments/environment';
import { StorageService } from './local-storage.service';
import { UtilsService } from './utils.service';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(
    private _router: Router,
    private _http: HttpClient,
    private _utilsService: UtilsService,
    private _storageService: StorageService,
  ) { }

  private formatErrors(error: any) {
    if (error && error.error) {
      if (error.error.errors && error.error.errors.length) {
        const errorMessages = [];
        for (let i = 0; i < error.error.errors.length; i++) {
          errorMessages.push(`${error.error.errors[i].field_label} ${error.error.errors[i].detail}`);
        }
        return throwError(errorMessages.join(', '));
      }
      if (error.status === 402) {
        this._storageService.clearAll();
        this._router.navigate(['/']);
        return throwError(error.message);
      }
      return throwError(error.error.message);
    }
    return throwError('Something went wrong');
  }

  get(path: string, body: Object = {}): Observable<any> {
    const url = `${environment.url}${path}`;
    let params = new HttpParams();
    body = this._utilsService.transformToSnakeCase(body);
    if (body && Object.keys(body).length) {
      for (const key in body) {
        if (body.hasOwnProperty(key)) {
          if (Array.isArray(body[key])) {
            for (let i = 0, len = body[key].length; i < len; i++) {
              params = params.append(`${key}`, body[key][i]);
            }
          } else {
            params = params.set(key, body[key]);
          }
        }
      }
    }
    return this._http
      .get(url, { params: params })
      .pipe(
        map(res => this._utilsService.transformToCamelCase(res)),
        catchError(this.formatErrors.bind(this))
      );
  }

  put(path: string, body: Object = {}): Observable<any> {
    const url = `${environment.url}${path}`;
    return this._http
      .put(url, this._utilsService.transformToSnakeCase(body))// this._utilsService.transformToSnakeCase(body))
      .pipe(
        map(res => this.toastrMessage(res)),
        catchError(this.formatErrors.bind(this))
      );
  }

  patch(path: string, body: Object = {}): Observable<any> {
    const url = `${environment.url}${path}`;
    return this._http
      .patch(url, this._utilsService.transformToSnakeCase(body))//this._utilsService.transformToSnakeCase(body)
      .pipe(
        map(res => this.toastrMessage(res)),
        catchError(this.formatErrors.bind(this))
      );
  }

  post(path: string, body: Object = {}): Observable<any> {
    const url = `${environment.url}${path}`;
    return this._http
      .post(url, this._utilsService.transformToSnakeCase(body))//, 
      .pipe(
        map(res => this.toastrMessage(res)),
        catchError(this.formatErrors.bind(this))
      );
  }

  delete(path, body: Object = {}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: body
    };
    const url = `${environment.url}${path}`;
    return this._http
      .delete(url, httpOptions)
      .pipe(
        map(res => this.toastrMessage(res)),
        catchError(this.formatErrors.bind(this))
      );
  }

  toastrMessage(data) {
    const transformedData = this._utilsService.transformToCamelCase(data);
    if (transformedData.success && transformedData.hasOwnProperty('message') &&
      transformedData.message && transformedData.message.length) {
    }
    return transformedData;
  }

  mulitipartForm(path: string, formData: FormData, isContentJson?): Observable<any> {
    //formData.append('file', body);
    return this._http.post(
      `${environment.url}${path}`,
      formData,
      isContentJson ? { headers: this.setContentTypeFormEncoded() } : {}
    ).pipe(catchError(this.formatErrors));
  }

  setContentTypeFormEncoded() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return headers;
  }
}
