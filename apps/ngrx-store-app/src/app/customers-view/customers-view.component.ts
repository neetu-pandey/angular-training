import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersEntity, loadCustomers, selectAll, selectEntities, selectTotal } from '@fis/customers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'fis-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.scss']
})
export class CustomersViewComponent implements OnInit {

  customers$: Observable<CustomersEntity[]>;

  constructor(private store: Store< { customers: CustomersEntity[] } >) {
    this.store.dispatch(loadCustomers());
    store.pipe(select('customers'));

    this.customers$ = store.select(selectAll);

    store.select(selectTotal).subscribe(entity => {
      console.log('entity...............', entity);
    });

  }

  ngOnInit(): void {
  }

}
