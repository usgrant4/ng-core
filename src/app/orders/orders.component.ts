import { Component, OnInit } from '@angular/core';
import { Order, Customer, OrderItem } from '../shared/interfaces';
import { DataService } from '../core/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: [ './orders.component.css' ]
})
export class OrdersComponent implements OnInit {
	orders: Order[] = [];
	customer: Customer;

	constructor(private dataService: DataService, private route: ActivatedRoute) {}

	ngOnInit() {
		let id = +this.route.snapshot.paramMap.get('id');

		this.dataService.getCustomer(id).subscribe((customer: Customer) => {
			this.customer = customer;
		});

		this.dataService.getOrders(id).subscribe((orders: Order[]) => {
			this.orders = orders;
		});
	}
}
