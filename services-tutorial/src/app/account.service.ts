import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging/logging.service";

@Injectable() //no {providedIn: 'root'} argument here, because of which it is necessary to add AccountService to the providers array in app.module.ts
export class AccountService {

    constructor(private loggingService: LoggingService) { }

    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    addAccount(account: { name: string, status: string }) {
        this.accounts.push(account);
        this.loggingService.logStatusChange(account.status);
    }

    updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus);
    }
}