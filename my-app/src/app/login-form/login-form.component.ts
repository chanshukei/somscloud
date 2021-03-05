import { Component, OnInit, ViewChild } from '@angular/core';
import { EcAccessRight, EcAccessRightService } from '../ec-access-right.service';
import { Observable } from 'rxjs';
import { EcTextfieldComponent } from '../ec-textfield/ec-textfield.component';
import { EcPasswordComponent } from '../ec-password/ec-password.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  @ViewChild('username') username: EcTextfieldComponent = new EcTextfieldComponent();
  @ViewChild('password') password: EcPasswordComponent = new EcPasswordComponent();

  accessRights: Observable<EcAccessRight[]> = new Observable<EcAccessRight[]>();
  constructor(private accessRightService: EcAccessRightService) { }

  ngOnInit() {
    this.accessRights = this.accessRightService.getAccessRight("Login", "default");
  }

  login(){
    console.log("Login: " + this.username.value + "/" + this.password.value);
  }

  reset(){
    this.username.clear();
    this.password.clear();
  }

}
