import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-http-loader',
  templateUrl: './http-loader.component.html',
  styleUrls: ['./http-loader.component.scss']
})
export class HttpLoaderComponent implements OnInit {

  @Input() spinnerFlag: any;

  constructor() { }

  ngOnInit(): void {
  }

}
