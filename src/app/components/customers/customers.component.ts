import { Component, OnInit } from '@angular/core';
import { CustomerCardComponent } from '../customers-card/customers-card.component';
import { Customers } from '../../models/customer.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CustomerCardComponent, CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})

export class CustomersComponent {
  Customer: Customers[] = [{
    id: 1 ,
    name: 'John Doe',
    company: 'Doe Enterprises',
    photoCli: 'https://via.placeholder.com/150', // Sample placeholder image
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA',
    phone: '123-456-7890',
    firstPurchaseYear: 2020,
    higherPurchaseValue: 5000,
    higherPurchaseDate: '2023-10-21'
  }];

}
