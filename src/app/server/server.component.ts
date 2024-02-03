import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline"
    allowNewServer = false;
    serverCreationStatus: string = "No server was created";
    serverName: string = ""
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {

    }

    onCreateServer() {
        this.serverCreationStatus = "Server was created!"
    }

    onUpdateServerName(event: any) {
        this.serverName = event.target.value;
    }
}