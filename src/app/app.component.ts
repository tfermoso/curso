import { Component } from '@angular/core';
import {LifeCycleComponent} from './life-cycle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {

  name:string='Anybody';
  valorInicial=23;
  ocultar=false;

  setName(name:string):void{
    this.name=name;
  }
  resetName():void{
    console.log(this.name);
    this.name='Anybody';
  }
  cambiar():void{
    this.valorInicial=122;
  }
  ocultarComponente():void{
    this.ocultar? this.ocultar=false: this.ocultar=true;
  }
}


