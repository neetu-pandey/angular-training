import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromCustomers from './customers.reducer';
import * as CustomersActions from './customers.actions';

@Injectable()
export class CustomersEffects {
  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomersActions.loadCustomers),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return CustomersActions.loadCustomersSuccess({ customers: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return CustomersActions.loadCustomersFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
