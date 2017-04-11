import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name:string='Anybody';

  setName(name:string):void{
    this.name=name;
  }
  resetName():void{
    console.log(this.name);
    this.name='Anybody';
  }
}
