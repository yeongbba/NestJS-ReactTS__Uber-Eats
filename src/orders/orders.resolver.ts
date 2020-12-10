import { OrderService } from './orders.service';
import { Order } from './entities/order.entity';
import { Resolver } from '@nestjs/graphql';

@Resolver((of) => Order)
export class OrderResolver {
  constructor(private readonly ordersService: OrderService) {}
}
