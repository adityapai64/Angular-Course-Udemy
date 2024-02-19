import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' }) //Because of {providedIn: 'root'} argument, this service does not need to be added to the providers array in app.module.ts. Using it like this loads the service lazily behind the scenes in Angular and removes redundant code. This is better for performance and loading speed of the application.
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}