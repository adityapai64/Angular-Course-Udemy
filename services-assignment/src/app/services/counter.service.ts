import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {
    deactivations: number = 0;
    activations: number = 0;

    incrementActivationCount() {
        this.activations++;
        console.log("Total deactivations: " + this.deactivations
            + "\nTotal activations: " + this.activations);
    }

    incrementDeactivationCount() {
        this.deactivations++;
        console.log("Total deactivations: " + this.deactivations
            + "\nTotal activations: " + this.activations);
    }
}
