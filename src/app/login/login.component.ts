import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isExist:any="yes";
  constructor(private _Router:Router){}
loginForm:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)])
})
handleLogin(loginForm:FormGroup){
if(loginForm.valid){
  localStorage.setItem("tokenToDoList","There is user");
  this._Router.navigate(['/home']);
  }
}
}

