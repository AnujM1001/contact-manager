import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ContactModel } from '../data-models/ContactModel';

@Injectable({
  providedIn: 'root'
})
export class DataCallsService {

  constructor(private http: HttpClient) { }

  contactData: ContactModel[];
  _searchTriggerEvent = new Subject();

  getContacts() {
    if (!this.contactData) {
      return this.http.get<ContactModel[]>('assets/jsonData/contact-data.json').pipe(
        tap(res => {
          this.contactData = res;
        })
      );
    } else {
      return of(this.contactData);
    }
  }

  addContact(newContact) {
    this.contactData.push(newContact);
  }

  getsearchTriggerEvent() {
    return this._searchTriggerEvent;
  }

  emitsearchTriggerEvent(searchText) {
    this._searchTriggerEvent.next(searchText);
  }


}
