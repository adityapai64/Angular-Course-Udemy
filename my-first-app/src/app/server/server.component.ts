import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white
        }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline"
    allowNewServer = false;
    serverCreationStatus: string = "No server was created";
    serverName: string = "";
    serverCreated = false;
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline"
    }

    ngOnInit() {

    }

    onCreateServer() {
        this.serverCreationStatus = "Server was created! Name is " + this.serverName;
        this.serverCreated = true;
    }

    onUpdateServerName(event: any) {
        this.serverName = event.target.value;
    }

    getColor() {
        return this.serverStatus === "online" ? "green" : "red";
    }
}