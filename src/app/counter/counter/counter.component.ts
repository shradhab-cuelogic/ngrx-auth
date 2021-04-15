import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter : number;
  constructor(
    private store: Store<{ counter : { counter: number } }>
  ) { }

  ngOnInit(): void {
  }

  // onIncrement() {
  //   this.counter++;
  // }

  // onDecrement() {
  //   this.counter--;
  // }

  // onReset() {
  //   this.counter = 0;
  // }
}
