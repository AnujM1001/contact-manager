import { DataCallsService } from './services/data-calls.service';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactEditorComponent,
    AddNewContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataCallsService],
  bootstrap: [AppComponent],
  entryComponents: [AddNewContactComponent]
})
export class AppModule { }
