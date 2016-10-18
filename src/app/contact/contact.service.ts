import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Contact } from './contact';

@Injectable()
export class ContactService {

  loading: boolean;
  data: Object;

  constructor(public http: Http, contact: Contact) {
    console.log('constructing contact.service');
  }

  sendContact(data) {
    return this.http.post('http://sitesbyjoe.com/api/send_contact', data)
      .map(this.extractData);
  }

  extractData(res) {
    console.log(res);
    let body = res.json();
    return body || {};
  }

}
