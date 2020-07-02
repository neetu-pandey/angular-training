import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersEntity, addCustomer, loadCustomers } from '@fis/customers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'fis-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  customers: Observable<CustomersEntity[]>;
  id = 1;
  value: any;

  constructor(private store: Store<{ customers: CustomersEntity[] }>) {
    this.customers = store.pipe(select('customers'));
  }

  addCustomer(custName: string) {
    const customer = new CustomersEntity();
    customer.name = custName;
    customer.id = this.id++;

    this.store.dispatch(addCustomer( { customer: customer } ));
    this.value = ''
  }

  ngOnInit(): void {
  }

}
