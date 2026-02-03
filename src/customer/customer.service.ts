import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];

  getAllCustomer(): Customer[] {
    return this.customers;
  }

  addCustomer(CreateCustomerDto: CreateCustomerDto): Customer {
    const newCustomer: Customer = {
      id: this.customers.length + 1,
      ...CreateCustomerDto,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }
}
