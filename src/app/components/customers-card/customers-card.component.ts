import { Component, Input } from '@angular/core';
import { Customers } from '../../models/customer.model';

@Component({
  selector: 'app-customers-card',
  standalone: true,
  imports: [],
  templateUrl: './customers-card.component.html',
  styleUrl: './customers-card.component.css'
})
export class CustomerCardComponent {
  @Input() customer!: Customers; 
}
 