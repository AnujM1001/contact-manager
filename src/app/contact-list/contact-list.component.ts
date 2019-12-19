import { DataCallsService } from './../services/data-calls.service';
import { AddNewContactComponent } from './../add-new-contact/add-new-contact.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactModel } from '../data-models/ContactModel';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {


  constructor(config: NgbAccordionConfig, private modalService: NgbModal, private http: DataCallsService) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
    config.type = 'light';
  }
  contactList: ContactModel[];
  contactListCopy: ContactModel[];
  ngOnInit() {
    this.http.getContacts().subscribe(res => {
      this.contactListCopy = res.reverse();
      this.filterContactData('');
    });

    this.http.getsearchTriggerEvent().subscribe(res => {
      this.filterContactData(res);
    });
  }

  filterContactData(res) {
    if (res === '') {
      this.contactList = this.contactListCopy;
    } else {
      this.contactList = this.contactListCopy.filter(v => {
        return v.firstName.toLowerCase().includes(res.toLowerCase()) ||
          v.lastName.toLowerCase().includes(res.toLowerCase()) ||
          v.email.toLowerCase().includes(res.toLowerCase()) ||
          v.status.toLowerCase() === res.toLowerCase() ||
          v.phoneNumber.toLowerCase().includes(res.toLowerCase());
      });
    }
  }

  saveContact(e, i) {
    console.log(e, i);
    this.contactList[i] = e;

  }

  openNewModal() {
    this.modalService.open(AddNewContactComponent, { size: 'lg', backdrop: 'static' });
  }

  deleteContact(e, i) {
    this.contactList.splice(i, 1);
  }


}
