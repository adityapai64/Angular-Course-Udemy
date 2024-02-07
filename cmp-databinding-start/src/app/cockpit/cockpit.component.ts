import { Component, ElementRef, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();
  newServerName = '';
  newServerContent = '';

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({ serverName: serverNameInput.value, serverContent: this.newServerContent });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({ blueprintName: this.newServerName, blueprintContent: this.newServerContent });
  }
}
