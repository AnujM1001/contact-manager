import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewContactComponent } from './add-new-contact.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddNewContactComponent', () => {
  let component: AddNewContactComponent;
  let fixture: ComponentFixture<AddNewContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewContactComponent],
      imports: [
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
