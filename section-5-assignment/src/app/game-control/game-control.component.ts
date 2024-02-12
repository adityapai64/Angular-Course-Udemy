import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() count = new EventEmitter<number>();
  @Output() stop = new EventEmitter<boolean>();
  num = 0;
  interval !: any;
  stopped: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }
  onStart() {
    this.stopped = false;
    this.stop.emit(this.stopped);
    this.interval = setInterval(() => {
      this.num++;
      this.count.emit(this.num);
    }, 1000);
  }
  onStop() {
    clearInterval(this.interval);
    this.stopped = true;
    if (this.stopped)
      this.stop.emit(this.stopped);
  }
}
