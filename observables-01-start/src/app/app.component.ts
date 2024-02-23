import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService) { }
  userActivated = false;
  subscription!: Subscription;
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    /* this.userService.activatedEmitter.subscribe(
      (activated) => this.userActivated = activated
    ); */
    this.subscription = this.userService.activatedEmitterSubject.subscribe(
      (activated) => this.userActivated = activated
    );
  }
}
