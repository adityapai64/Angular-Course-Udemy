import { Component } from '@angular/core';
import { ClickDetails } from './click-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-3';
  showHiddenText = false;
  clicksArray: ClickDetails[] = [];

  onDetailsButtonClick() {
    this.showHiddenText = !this.showHiddenText;

    let clickDetails: ClickDetails = {
      timestamp: new Date(),
      totalClicks: this.clicksArray.length + 1
    };
    this.clicksArray.push(clickDetails);
  }
}
