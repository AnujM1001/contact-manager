import { DataCallsService } from './../services/data-calls.service';
import { Component, OnInit, } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.scss']
})
export class AddNewContactComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private http: DataCallsService) { }


  ngOnInit() {

  }

  saveContact(e) {
    console.log(e);
    this.http.addContact(e);
    this.activeModal.close();
  }

}
