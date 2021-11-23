import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
isUserLogged:boolean=false;
  constructor(
    private userLoginService: UserLoginService
  ) { }

  ngOnInit(): void {
    this.isUserLogged = this.userLoginService.loginStatus();
  }

  login(){
    this.userLoginService.login("Ahmed", "123456");
    this.isUserLogged = this.userLoginService.loginStatus();
  }

  logout(){
    this.userLoginService.logout();
    this.isUserLogged=this.userLoginService.loginStatus();
  }

}
