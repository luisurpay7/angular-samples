import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'changeDetection';
  data = 'Luis';

  changeData(){
    this.data = 'Angel';
  }

  keyup(){}
}
