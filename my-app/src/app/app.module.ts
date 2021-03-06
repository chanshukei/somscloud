import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcTextfieldComponent } from './ec-textfield/ec-textfield.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { EcButtonComponent } from './ec-button/ec-button.component';
import { EcPasswordComponent } from './ec-password/ec-password.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { EcImagebuttonComponent } from './ec-imagebutton/ec-imagebutton.component';
import { EcDatatableComponent } from './ec-datatable/ec-datatable.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { EcSelectComponent } from './ec-select/ec-select.component';
import { EcDatepickerComponent } from './ec-datepicker/ec-datepicker.component';
import { EcReadonlyTextComponent } from './ec-readonlytext/ec-readonlytext.component';

@NgModule({
  declarations: [
    AppComponent,
    EcTextfieldComponent,
    LoginFormComponent,
    EcButtonComponent,
    EcPasswordComponent,
    MainMenuComponent,
    EcImagebuttonComponent,
    EcDatatableComponent,
    PlaceOrderComponent,
    EcSelectComponent,
    EcDatepickerComponent,
    EcReadonlyTextComponent
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
