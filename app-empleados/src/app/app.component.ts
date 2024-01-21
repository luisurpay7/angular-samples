import { Component, OnInit } from '@angular/core';
// import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCBp41yDa3SYsNYnatUPbBpPF2yqMFMKLo",
      authDomain: "clientesangular-a5570.firebaseapp.com",
    })
  }
}
