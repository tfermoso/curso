import { Component,
         OnInit,
         OnChanges,
         DoCheck,
         AfterContentInit,
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked,
         OnDestroy,
        Input } from '@angular/core';

@Component({
    selector: 'lifecycle',
    template: `
        <p>Ciclo de Vida</p>
        <p>{{valorInicial}}</p>
        <input type="text" [(ngModel)]="valorInicial" >
    `,
})
export class LifeCycleComponent implements OnChanges,OnInit,DoCheck,
                AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked,
                OnDestroy {
    @Input()
    valorInicial:number=10;

    constructor() {
        this.log('constructor');
     }

    ngOnInit() {
        this.log('ngOnInit');

     }
     ngOnChanges(){
         this.log('ngOnChanges');
     }
     ngDoCheck(){
         this.log('ngDoCheck');
     }
     ngAfterContentChecked(){
         this.log('ngAfterContentChecked');
     }
     ngAfterContentInit(){
         this.log('ngAfterContentInit');
     }
     ngAfterViewInit(){
         this.log('ngAfterViewInit');
     }
     ngAfterViewChecked(){
         this.log('ngAfteViewChecked');
     }
     ngOnDestroy(){
         this.log('ngOnDestroy');
     }


     private log(hook:string){
         console.log(hook);
     }
}