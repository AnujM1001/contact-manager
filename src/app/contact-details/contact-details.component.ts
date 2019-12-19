import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactModel } from '../data-models/ContactModel';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  data: ContactModel;

  @Output() editing = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  @Input() set contact(value) {
    this.data = value;
  }

  constructor() { }

  ngOnInit() {
  }


  startEditing() {
    this.editing.emit();
  }

  deleteContact() {
    this.deleteEvent.emit();
  }

}
