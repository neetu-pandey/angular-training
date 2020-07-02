import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as CustomersActions from './customers.actions';
import { CustomersEntity } from './customers.models';
export const CUSTOMERS_FEATURE_KEY = 'customers';

export interface State extends EntityState<CustomersEntity> {
  selectedId?: string | number; // which Customers record has been selected
  loaded: boolean; // has the Customers list been loaded
  error?: string | null; // last none error (if any)
}

export const customersAdapter: EntityAdapter<CustomersEntity> = createEntityAdapter< CustomersEntity >();

export const initialState: State = customersAdapter.getInitialState({
  loaded: false,
});

const customersReducer = createReducer(
  initialState,
  on(CustomersActions.loadCustomers, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CustomersActions.loadCustomersSuccess, (state, { customers }) =>
    customersAdapter.addAll(customers, { ...state, loaded: true })
  ),
  on(CustomersActions.loadCustomersFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(CustomersActions.addCustomer, (state, { customer }) =>
    customersAdapter.addOne(customer, { ...state, loaded: true })
  ),
  on(CustomersActions.editCustomer, (state, { update }) =>
    customersAdapter.updateOne(update, { ...state, loaded: true})
  ),
  on(CustomersActions.removeCustomer, (state, { custId }) =>
    customersAdapter.removeOne(custId, { ...state, loaded: true})
  )
);

export function reducer(state: State | undefined, action: Action) {
  return customersReducer(state, action);
}
