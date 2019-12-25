import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { ContactListComponent } from './contact-list.component';
import { AppTestingModule } from '../appTstingModule';
import { DataCallsService } from '../services/data-calls.service';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let getContactSpy;

  beforeEach(async(() => {
    const testContact = [{
      'firstName': 'Jhon',
      'lastName': 'Doe1',
      'phoneNumber': 'xxxxxxxxxx',
      'email': 'x@x.com',
      'status': 'Active'
    }];

    const spy = jasmine.createSpyObj('DataCallsService', ['getContacts', 'getsearchTriggerEvent']);
    getContactSpy = spy.getContacts.and.returnValue(of(testContact));
    TestBed.configureTestingModule({
      imports: [
        AppTestingModule
      ], declarations: [
        // ContactListComponent
      ], providers: [
        { provide: DataCallsService, useValue: spy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have contact list', () => {
    component.ngOnInit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.contactListCopy.length).toEqual(1);
    });
  });
});
