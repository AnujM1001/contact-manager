import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEditorComponent } from './contact-editor.component';
import { AppTestingModule } from '../appTstingModule';

describe('ContactEditorComponent', () => {
  let component: ContactEditorComponent;
  let fixture: ComponentFixture<ContactEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppTestingModule
      ], declarations: [
        // ContactEditorComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
