import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class UtilsService {

  constructor() { }

  encode(value) {
    return btoa(value);
  }

  decode(value) {
    return atob(value);
  }

  transformToSnakeCase(data) {
    let newData;

    if (data instanceof File || data instanceof FormData) { // file object -> transformation is not needed
      newData = data;
    } else {
      if (data && _.isObject(data) && !Array.isArray(data)) { // object
        newData = {};
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const newKey = _.snakeCase(key);
            newData[newKey] = data[key];
            if (data[key] && _.isObject(data[key]) && !Array.isArray(data[key])) { // object
              newData[newKey] = this.transformToSnakeCase(data[key]);
            } else if (data[key] && Array.isArray(data[key])) { // array
              newData[newKey] = this.transformToSnakeCase(data[key]);
            }
          }
        }
      } else if (data && _.isObject(data) && Array.isArray(data)) { // array
        newData = [];
        for (const value of data) {
          if (_.isObject(value) || Array.isArray(value)) { // array or object
            newData.push(this.transformToSnakeCase(value));
          } else { // any value except array and object
            newData.push(value);
          }
        }
      }
    }
    return newData;
  }

  transformToCamelCase(data) {
    let newData;
    if (data && _.isObject(data) && !Array.isArray(data)) { // object
      newData = {};
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const newKey = _.camelCase(key);
          newData[newKey] = data[key];
          if (data[key] && _.isObject(data[key]) && !Array.isArray(data[key])) { // object
            newData[newKey] = this.transformToCamelCase(data[key]);
          } else if (data[key] && Array.isArray(data[key])) { // array
            newData[newKey] = this.transformToCamelCase(data[key]);
          }
        }
      }
    } else if (data && _.isObject(data) && Array.isArray(data)) { // array
      newData = [];
      for (const value of data) {
        if (_.isObject(value) || Array.isArray(value)) { // array or object
          newData.push(this.transformToCamelCase(value));
        } else { // any value except array and object
          newData.push(value);
        }
      }
    }
    return newData;
  }

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  addClassToCalendar(dateValues, calenderId): void {
    const dates = dateValues.map(val => {
      return val.toLocaleDateString();
    });
    const elements: any = document.querySelector(`#${calenderId} tbody`).childNodes;
    for (let element of elements) {
      for (let e of element.childNodes) {
        if (dates.length) {
          dates.forEach(o => {
            if (o == new Date(this.convertDateFormat(e.childNodes[0].title)).toLocaleDateString()) {
              e.classList.remove('e-selected');
              e.classList.remove('e-focused-date');
              e.classList.add('e-selected');
            }
          });
        }
      }
    }
  }

  checkSlotType(dateSlotsArr, currentDateWithSlots, daySlots, dayArr, nightArr): void {
    dateSlotsArr.forEach(obj => {
      if (new Date(this.convertDateFormat(obj.date)).toLocaleDateString() == currentDateWithSlots) {
        obj.timeSlots.forEach(slot => {
          if (daySlots.indexOf(slot.slot) > -1) {
            dayArr.push({
              slot: slot,
              isChecked: false
            });
          } else {
            nightArr.push({
              slot: slot,
              isChecked: false
            });
          }
        });
      }
    });
  }

  convertDateFormat(date): string {
    const newDate = date.split('-');
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
  }

  changeProfileDateFormate(dateObj) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${dateObj.day} ${monthNames[dateObj.month - 1]}, ${dateObj.year}`;
  }

  ordinalNumber(value) {
    let suffix = '';
    const last = value % 10;
    const specialLast = value % 100;
    if (!value || value < 1) {
      return value;
    }
    if (last === 1 && specialLast !== 11) {
      suffix = 'st';
    } else if (last === 2 && specialLast !== 12) {
      suffix = 'nd';
    } else if (last === 3 && specialLast !== 13) {
      suffix = 'rd';
    } else {
      suffix = 'th';
    }
    return value + suffix;
  }

  colName(n) {
    var ordA = 'A'.charCodeAt(0);
    var ordZ = 'Z'.charCodeAt(0);
    var len = ordZ - ordA + 1;
    var s = "";
    while (n >= 0) {
      s = String.fromCharCode(n % len + ordA) + s;
      n = Math.floor(n / len) - 1;
    }
    return s;
  }

}
