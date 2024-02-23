import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription!: Subscription;
  private newObsSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe(count => console.log(count));
    const customInterval = Observable.create((observer: { next: (count: number) => void; error: (error: Error) => void; complete: () => void }) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) observer.error(new Error('Count is greater than 3'));
        if (count === 2) observer.complete()
        count++;
      }, 1000);
    });

    //The above way of creating an observable is deprecated. It is the one followed in the course, however. The modern way of creating an observable can be found below:

    const newObservable = new Observable<number>(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) observer.complete();
        if (count > 3) observer.error(new Error('Count is greater than 3'));
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customInterval.pipe(map((count: number) => {
      return 'Round ' + (count + 1);
    })).
      subscribe((data: number) => console.log(data), (error: Error) => console.log(error), () => console.log('Completed!'));
    this.newObsSubscription = newObservable.pipe(map((count: number) => {
      const oddOrEven = (count + 1) % 2 == 0 ? 'even' : 'odd'
      return 'Current count is: ' + (count + 1) + '.\nIt is an ' + oddOrEven + 'number.'
    }))
      .subscribe((data: string) => console.log(data), (error: Error) => console.log(error), () => console.log('Completed!'));
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
    this.newObsSubscription.unsubscribe()
  }

}
