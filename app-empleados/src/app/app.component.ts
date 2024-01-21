import { Component, OnInit } from '@angular/core';
// import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCBp41yDa3SYsNYnatUPbBpPF2yqMFMKLo",
      authDomain: "clientesangular-a5570.firebaseapp.com",
    })
  }

  estaLoguedo(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }

}
