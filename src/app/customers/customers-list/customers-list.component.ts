import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces';
import { SorterService } from 'src/app/core/sorter.service';

@Component({
	selector: 'app-customers-list',
	templateUrl: './customers-list.component.html',
	styleUrls: [ './customers-list.component.css' ]
})
export class CustomersListComponent implements OnInit {
	private _customers: Customer[] = [];
	@Input()
	get customers(): Customer[] {
		return this._customers;
	}

	set customers(value: Customer[]) {
		if (value) {
			this.filteredCustomers = this._customers = value;
			this.calculateOrders();
		}
	}

	filteredCustomers: Customer[] = [];
	customersOrderTotal: number;
	currencyCode: string = 'USD';

	constructor(private sorterService: SorterService) {}

	ngOnInit() {}

	calculateOrders(): void {
		this.customersOrderTotal = 0;
		this.filteredCustomers.forEach((customer: Customer) => {
			this.customersOrderTotal += customer.orderTotal;
		});
	}

	filter(data: string) {
		if (data) {
			this.filteredCustomers = this.customers.filter((customer: Customer) => {
				return (
					customer.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
					customer.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
					customer.orderTotal.toString().indexOf(data) > -1
				);
			});
		} else {
			this.filteredCustomers = this.customers;
		}
		this.calculateOrders();
	}

	sort(property: string) {
		this.sorterService.sort(this.filteredCustomers, property);
	}
}
