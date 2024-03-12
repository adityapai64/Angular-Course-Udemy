import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formObject') signupForm!: NgForm;
  defaultQuestion: string = "pet";
  answer: string = "";


  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  /*   onSubmit(formObject: NgForm) {
      console.log(formObject);
    } */

  onSubmit() {
    console.log(this.signupForm)
  }
}