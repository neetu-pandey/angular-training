import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  State,
  customersAdapter,
  CUSTOMERS_FEATURE_KEY
} from './customers.reducer';

export const getCustomersState = createFeatureSelector<State>(CUSTOMERS_FEATURE_KEY);
export const { selectAll } = customersAdapter.getSelectors(getCustomersState);
export const getAllCustomers = createSelector(getCustomersState, (state: State) => selectAll(state));
