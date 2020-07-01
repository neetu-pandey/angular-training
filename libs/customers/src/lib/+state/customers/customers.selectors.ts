import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  State,
  customersAdapter,
  CUSTOMERS_FEATURE_KEY
} from './customers.reducer';


export const getCustomersState = createFeatureSelector<State>(CUSTOMERS_FEATURE_KEY);

export const { selectAll, selectEntities, selectTotal } = customersAdapter.getSelectors(getCustomersState);

export const getCustomersLoaded = createSelector(getCustomersState, (state: State) => state.loaded );

export const getCustomersError = createSelector(getCustomersState, (state: State) => state.error);

export const getAllCustomers = createSelector(getCustomersState, (state: State) => selectAll(state));

export const getCustomersCount = createSelector(getCustomersState, (state: State) => selectTotal(state));

export const getCustomersEntities = createSelector(getCustomersState, (state: State) => selectEntities(state));

export const getSelectedId = createSelector(getCustomersState, (state: State) => state.selectedId);

export const getSelected = createSelector(getCustomersEntities, getSelectedId, (entities, selectedId) => selectedId && entities[selectedId]);
