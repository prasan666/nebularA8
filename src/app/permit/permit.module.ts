import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermitRoutingModule } from './permit-routing.module';
import { CreatePermitComponent } from './create-permit/create-permit.component';

@NgModule({
  declarations: [CreatePermitComponent],
  imports: [CommonModule, PermitRoutingModule]
})
export class PermitModule {}
