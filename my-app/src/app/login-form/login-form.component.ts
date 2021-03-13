import { Component, OnInit, ViewChild } from '@angular/core';
import { EcAccessRight, EcAccessRightService } from '../ec-access-right.service';
import { Observable } from 'rxjs';
import { EcTextfieldComponent } from '../ec-textfield/ec-textfield.component';
import { EcPasswordComponent } from '../ec-password/ec-password.component';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  @ViewChild('username') username: EcTextfieldComponent = new EcTextfieldComponent();
  @ViewChild('password') password: EcPasswordComponent = new EcPasswordComponent();

  accessRights: Observable<EcAccessRight[]> = new Observable();

  constructor(    
    private accessRightService: EcAccessRightService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.accessRights = this.accessRightService.getAccessRight("Login", "default");
  }

  login(){
    console.log("Login: " + this.username.value + "/" + this.password.value);
    this.loginService.getLoginResult(this.username.value, this.password.value).subscribe(
      event => {
        var loginResult = event[0];
        console.log("LoginResult: "+ loginResult.userId + "/" + loginResult.result);
        window.sessionStorage.setItem("userId", loginResult.userId);
        this.router.navigate(['../dashboard'], {relativeTo: this.route});
      }
    );
  }

  reset(){
    this.username.clear();
    this.password.clear();
  }

}
