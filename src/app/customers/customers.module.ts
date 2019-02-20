import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox/filter-textbox.component';

@NgModule({
	declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
	imports: [ CommonModule, AppRoutingModule ],
	exports: [ CustomersComponent ]
})
export class CustomersModule {}
