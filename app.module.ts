import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {NgbdModalContent, SelectCoacComponent} from './pages/select-coac/select-coac.component';
import {NgbdModalContents,  SelectNutrComponent } from './pages/select-nutr/select-nutr.component';
import { PayComponent } from './pages/pay/pay.component';
import {NgbdModalContente, OneCourseComponent} from './pages/one-course/one-course.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    SelectCoacComponent,
    SelectNutrComponent,
    NgbdModalContent,
    NgbdModalContents,
    NgbdModalContente,
    PayComponent,
    OneCourseComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
