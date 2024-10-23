import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customers } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = "http://localhost:3000/customers";

  constructor(private httpClient: HttpClient) { }
  getCustomers(): Observable<Customers[]> {
    return this.httpClient.get<Customers[]>(this.url)
  }
}