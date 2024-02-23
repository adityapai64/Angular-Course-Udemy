import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //@Output('feature') featureSelected = new EventEmitter<string>();
  //dropdownActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  /* onSelect(feature: string) {
    this.featureSelected.emit(feature);
  } */

  /* openDropdown() {
    this.dropdownActive = !this.dropdownActive;
  } */

}
