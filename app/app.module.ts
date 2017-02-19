import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { BaseComponent } from './base.component';
//Establishes meta data for angular
@NgModule({ 
    imports: [
        FormsModule, 
        BrowserModule, 
        HttpModule
    ],
    declarations: [
        BaseComponent
    ],
    providers: [/* data services will be put here */],
    bootstrap: [BaseComponent]
})
export class AppModule { } 