import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  constructor(private sidebarService: NbSidebarService) {}

  ngOnInit() {}

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
