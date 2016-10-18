import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [Contact, ContactService]
})
export class ContactComponent implements OnInit {

  constructor(
    private contact:Contact,
    private contactService:ContactService
  ) {}

  ngOnInit() {
  }

  submitForm(value) {
    console.log('you submitted', value);
  }

}
