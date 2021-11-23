import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
isUserLogged:boolean = false;
  constructor(private userLoginService: UserLoginService) { }

  ngOnInit(): void {
    this.userLoginService.loginStatusSubject().subscribe({
      next: (logStatus)=>{
        this.isUserLogged = logStatus;
      }
    });
  }

}
