import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces';

@Component({
	selector: 'app-customers-list',
	templateUrl: './customers-list.component.html',
	styleUrls: [ './customers-list.component.css' ]
})
export class CustomersListComponent implements OnInit {
	filteredCustomers: Customer[] = [];
	customersOrderTotal: number;
	currecyCode: string = 'USD';

	constructor() {}

	ngOnInit() {}
}
