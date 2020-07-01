import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCustomers from './+state/customers/customers.reducer';
import { CustomersEffects } from './+state/customers/customers.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCustomers.CUSTOMERS_FEATURE_KEY,
      fromCustomers.reducer
    ),
    EffectsModule.forFeature([CustomersEffects]),
  ],
})
export class CustomersModule {}
