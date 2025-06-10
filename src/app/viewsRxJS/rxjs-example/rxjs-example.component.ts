import {Component, OnInit, Signal} from '@angular/core';
import {BehaviorSubject, Observable, of, pipe, Subject, takeUntil, tap} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormsModule} from '@angular/forms';
import {normalizeExtraEntryPoints} from '@angular-devkit/build-angular/src/tools/webpack/utils/helpers';
import {toSignal} from '@angular/core/rxjs-interop';
import {CommonModule} from '@angular/common';
import {unsignedOnDestroyed} from '../unsignedOnDestroyed';

@Component({
  selector: 'app-rxjs-example',
  imports: [FormsModule,CommonModule],
  standalone : true,
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.css'
})
export class RxjsExampleComponent implements OnInit{

  txt : string = '';

  txtToUppercase : string = '';

  txtDataSubject = new BehaviorSubject<string>(this.txt);

  txtData$! : Observable<string>;

  txtSignal! : Signal<string>;

  numbers = [1,2,3,4,5,6,7,8,9,10];

  constructor() {

    this.txtData$ = this.txtDataSubject.asObservable().pipe(
      tap(t=>console.log(t)),
      map(t=>t.toUpperCase())
    )

    // this.txtData$ = of(this.txt).pipe(
    //   tap(text=>console.log("from observable :"+text)),
    //   map((t)=>t.toUpperCase())
    // );
    this.txtSignal = toSignal(this.txtData$, {initialValue:''});
  }

  ngOnInit(): void {
    this.fullExampleObserver();
    of(this.numbers).pipe(takeUntil(unsignedOnDestroyed(this))).pipe(map(numbersArr=>{
      return numbersArr.map(n=> ({
        sourceNumber : n,
        doubleNumber : n * 2
      }))
    })).subscribe(
      (res) => console.log(res)
    )




  }
  changeTxtToUpperCase (){


    // of(this.txt).
    // pipe(
    //   tap((t)=> console.log("text input:"+t)),
    //   map((t)=>t.toUpperCase())
    //
    // ).subscribe((txtUppercase)=>this.txtToUppercase = txtUppercase);// create always observable may lead to trade off.
    this.txtDataSubject.next(this.txt);
    this.txtData$.pipe(takeUntil(unsignedOnDestroyed(this))).subscribe((txtUpper)=>{
      console.log(txtUpper);
      this.txtToUppercase = txtUpper;
    });
  }

  fullExampleObserver () {
    const fruitData$ = of ('banana','apple');

    const observer  = {
      next : (fruit:string) => console.log(`i like ${fruit}`),
      complete : () => console.log('The fruits are empty')
    };

    fruitData$.pipe(takeUntil(unsignedOnDestroyed(this))).subscribe(observer);

    const subject = new Subject();

    //1
    subject.subscribe(v=>console.log(v));

    subject.next('Hello world');

    const  behaviorSubject = new  BehaviorSubject('Hi first message');

    behaviorSubject.pipe(takeUntil(unsignedOnDestroyed(this))).subscribe()
    behaviorSubject.pipe(takeUntil(unsignedOnDestroyed(this))).subscribe(v=>console.log(v));


  }

  ngOnDestroy(): void {
  }

}
