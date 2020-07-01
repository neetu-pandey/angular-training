import { createAction, props } from '@ngrx/store';
import { CustomersEntity } from './customers.models';

export const loadCustomers = createAction('[Customers] Load Customers');

export const loadCustomersSuccess = createAction(
  '[Customers] Load Customers Success',
  props<{ customers: CustomersEntity[] }>()
);

export const loadCustomersFailure = createAction(
  '[Customers] Load Customers Failure',
  props<{ error: any }>()
);
