var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';
var ContactComponent = (function () {
    function ContactComponent(contact, contactService) {
        this.contact = contact;
        this.contactService = contactService;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.submitForm = function (value) {
        console.log('you submitted', value);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.css'],
        providers: [Contact, ContactService]
    }),
    __metadata("design:paramtypes", [Contact,
        ContactService])
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=../../../../src/app/contact/contact.component.js.map