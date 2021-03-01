import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcTextfieldComponent } from './ec-textfield/ec-textfield.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { EcAccessrightComponent } from './ec-accessright/ec-accessright.component';

@NgModule({
  declarations: [
    AppComponent,
    EcTextfieldComponent,
    LoginFormComponent,
    EcAccessrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
