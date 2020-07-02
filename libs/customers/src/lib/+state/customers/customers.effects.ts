import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as CustomersActions from './customers.actions';
import { CustomerService } from '../../services/customer.service';
import { CustomersEntity } from './customers.models';

@Injectable()
export class CustomersEffects {

  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomersActions.loadCustomers),
      mergeMap(() => this.custService.getCustomers()
        .pipe(
          tap(console.log),
          map((data: CustomersEntity[]) => CustomersActions.loadCustomersSuccess( { customers: data['Customers'] })),
          catchError(() => of({ type: '[Customers] Load Customers Failure' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private custService: CustomerService) {}
}
