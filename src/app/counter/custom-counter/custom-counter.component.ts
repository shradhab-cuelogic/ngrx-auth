import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {

  value: number;
  constructor(private store: Store<{ counter: number }>) { }

  ngOnInit(): void {
  }

  onAdd() {
    console.log(this.value);
    this.store.dispatch(customIncrement({ value: +this.value }))
  }
}
