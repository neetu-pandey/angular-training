import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCustomers from './+state/customers/customers.reducer';
import { CustomersEffects } from './+state/customers/customers.effects';
import { CustomerService } from './services/customer.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromCustomers.CUSTOMERS_FEATURE_KEY,
      fromCustomers.reducer
    ),
    EffectsModule.forFeature([CustomersEffects]),
  ],
  providers: [ CustomerService ]
})
export class CustomersModule {}
