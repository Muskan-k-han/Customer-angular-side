import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddcustomerCodedrivenComponent } from './addcustomer-codedriven/addcustomer-codedriven.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {
    path:'customer-details',
    component:CustomerDetailsComponent
  },
  {
    path:'add-customer',
    component:AddCustomerComponent
  },
  {
    path:'addcustomer-codedriven',
    component:AddcustomerCodedrivenComponent
  },
  {
    path:'customer-list',
    component:CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
