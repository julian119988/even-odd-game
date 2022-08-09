import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() notifyCounter: EventEmitter<any> = new EventEmitter();
  counter = 0;
  gameStarted = false;
  gameInterval: any;
  constructor() {}

  ngOnInit(): void {}

  toggleStart() {
    if (this.gameStarted) {
      clearInterval(this.gameInterval);
    } else {
      this.gameInterval = setInterval(() => {
        this.counter++;
        this.notifyCounter.emit(this.counter);
        console.log('interval ejecuted', this.counter);
      }, 1000);
    }
    this.gameStarted = !this.gameStarted;
  }
}
