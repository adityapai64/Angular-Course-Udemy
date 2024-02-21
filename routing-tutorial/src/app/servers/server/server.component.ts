import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server!: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    let activeId = Number(this.activatedRoute.snapshot.params['id']);
    this.server = this.serversService.getServer(activeId);
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        activeId = Number(params['id']);
        this.server = this.serversService.getServer(activeId);
      }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute, queryParamsHandling: 'preserve' });
  }

}