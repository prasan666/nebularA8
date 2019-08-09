import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbSidebarService,
  NbIconModule,
  NbSelectModule,
  NbSearchModule,
  NbActionsModule,
  NbMenuService
} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbIconModule,
    NbSelectModule,
    NbSearchModule,
    NbActionsModule
  ],
  declarations: [HeaderComponent, ShellComponent],
  providers: [NbSidebarService, NbMenuService]
})
export class ShellModule {}
