import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  } from 'docx';
import { HttpClientModule } from '@angular/common/http';
import { DocumentEditorContainerAllModule } from '@syncfusion/ej2-angular-documenteditor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DocumentEditorContainerAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
