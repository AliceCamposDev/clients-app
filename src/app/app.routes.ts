import { Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'customers', component: CustomersComponent }
];
