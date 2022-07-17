import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {

  all_numbers: number[] = [];
  selected_numbers: number[] = [];

  obs = new Observable((observer) => {
    console.log("Observable starts")
      observer.next("1")
      observer.next("2")
      observer.next("3")
      observer.next("4")
      observer.next("5")
  });

  constructor() { 
    this.all_numbers = Array.from({length: 80}, (_, i) => i + 1);
   }

   onUserSelect(number) {
    if (this.selected_numbers.includes(number))
    {
      null
    }
    else 
    {
      this.selected_numbers.push(number);
    }
    console.log(this.selected_numbers)
    return this.selected_numbers;
}

  ngOnInit(){}
  
}