import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokdemo';
  // tslint:disable-next-line:typedef
  foo(){
    this.title = 'Hello le web';
  }
}
