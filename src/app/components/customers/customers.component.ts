import { Component, OnInit } from '@angular/core';
import { CustomerCardComponent } from '../customers-card/customers-card.component';
import { Customers } from '../../models/customer.model';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CustomerCardComponent, CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})

export class CustomersComponent {
  constructor (private CustomerService : CustomerService){};
  Customers = [] as  Customers[];
  ngOnInit(): void{
    this.fetchCustomers();
  }
  fetchCustomers(){
    this.CustomerService.getCustomers().subscribe((customers: Customers[]) => {
      console.log(customers);
      this.Customers = customers;
    })
  }
}
