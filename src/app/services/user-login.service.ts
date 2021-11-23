import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
private isLoggedSubject: BehaviorSubject<boolean>;

  constructor() {
    this.isLoggedSubject = new BehaviorSubject<boolean>(false);
   }

   login(userName: string, pwd: string):boolean{
     let userToken: string =  "0600f938-7c7f-4bef-a569-3e15dcc43140";
     localStorage.setItem('userToken', userToken);
     this.isLoggedSubject.next(true);
     return true;
   }

   logout(){
     localStorage.removeItem('userToken');
     this.isLoggedSubject.next(false);
   }

   loginStatus():boolean{
     if(localStorage.getItem('userToken')){
       return true;
     }
     else{
       return false;
     }
   }

   loginStatusSubject():Observable<boolean>{
     return this.isLoggedSubject.asObservable();
   }
}
