import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Customer, Order } from '../shared/interfaces';

@Injectable()
export class DataService {
	baseUrl: string = 'assets/';

	constructor(private http: HttpClient) {}

	getCustomers(): Observable<Customer[]> {
		return this.http.get<Customer[]>(`${this.baseUrl}customers.json`).pipe(catchError(this.handleError));
	}

	getCustomer(id: number): Observable<Customer> {
		return this.http.get<Customer[]>(`${this.baseUrl}customers.json`).pipe(
			map((customers) => {
				let customer = customers.filter((customer: Customer) => customer.id === id);
				return customer && customer.length ? customer[0] : null;
			}),
			catchError(this.handleError)
		);
	}

	getOrders(id: number): Observable<Order[]> {
		return this.http.get<Order[]>(`${this.baseUrl}orders.json`).pipe(
			map((orders) => {
				let customerOrders = orders.filter((order: Order) => order.customerId === id);
				return customerOrders;
			}),
			catchError(this.handleError)
		);
	}

	private handleError(error: any) {
		console.error('Server Error:', error);
		if (error.error instanceof Error) {
			const errMessage = error.error.message;
			return Observable.throw(errMessage);
		}
		return Observable.throw(error || 'Node.js Server Error');
	}
}
