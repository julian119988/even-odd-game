import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  counter: any;
  listOfNumbers: any;
  ngOnChanges(event: SimpleChanges) {
    console.log(event);
  }
  test(value: number) {
    this.listOfNumbers = Array(value)
      .fill(value)
      .map((x, i) => i);
  }
}
