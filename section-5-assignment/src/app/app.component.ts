import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'section-5-assignment';
  evenCount: number[] = [];
  oddCount: number[] = [];
  stop: boolean = false;

  displayCount(count: number) {
    count % 2 == 0 ? this.evenCount.push(count) : this.oddCount.push(count);
  }

  stopCount(stop: boolean) {
    this.stop = stop;
  }
}
