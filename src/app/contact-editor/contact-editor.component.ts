import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.scss']
})
export class ContactEditorComponent implements OnInit {
  contactForm: FormGroup;
  isPhoneNumberCorrect: boolean;
  @Output() saveContactDetails = new EventEmitter();
  @Input() set contactDataSetter(value) {
    this.contactForm.setValue({
      firstName: value.firstName,
      lastName: value.lastName,
      phoneNumber: value.phoneNumber,
      email: value.email,
      status: value.status.toLowerCase(),
    });
  }
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    const phoneNumber = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(phoneNumber)]],
      email: ['', [Validators.required, Validators.email]],
      status: ['', Validators.required]
    });
  }


  ngOnInit() {

  }


  saveContact() {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.saveContactDetails.emit(this.contactForm.value);
    }
  }

}
