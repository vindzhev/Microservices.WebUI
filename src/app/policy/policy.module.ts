import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyRoutingModule } from './policy-routing.module';

import {
  PolicyCollectionComponent, PolicyService
} from './';
import { CustomMaterialModuleModule } from '../shared/material/custom-material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { PolicyCreateComponent } from './policy-create/policy-create.component';
import { PolicySearchService } from './policy-search.service';

@NgModule({
  declarations: [
    PolicyCollectionComponent,
    PolicyDetailsComponent,
    PolicyCreateComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PolicyRoutingModule,
    ReactiveFormsModule,

    CustomMaterialModuleModule
  ],
  providers: [PolicyService, PolicySearchService],
  exports: [CustomMaterialModuleModule]
})
export class PolicyModule { }

