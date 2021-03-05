import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcTextfieldComponent } from './ec-textfield/ec-textfield.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { EcButtonComponent } from './ec-button/ec-button.component';
import { EcPasswordComponent } from './ec-password/ec-password.component';

@NgModule({
  declarations: [
    AppComponent,
    EcTextfieldComponent,
    LoginFormComponent,
    EcButtonComponent,
    EcPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
