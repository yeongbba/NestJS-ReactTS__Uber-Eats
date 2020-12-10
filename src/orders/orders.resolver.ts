import { User } from './../users/entities/user.entity';
import { AuthUser } from './../auth/auth-user.decorator';
import { Role } from './../auth/role.decorator';
import { CreateOrderOutput, CreateOrderInput } from './dtos/create-order.dto';
import { OrderService } from './orders.service';
import { Order } from './entities/order.entity';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

@Resolver((of) => Order)
export class OrderResolver {
  constructor(private readonly ordersService: OrderService) {}

  @Mutation((returns) => CreateOrderOutput)
  @Role(['Client'])
  async createOrder(
    @AuthUser() customer: User,
    @Args('input')
    createOrderInput: CreateOrderInput,
  ): Promise<CreateOrderOutput> {
    return this.ordersService.createOrder(customer, createOrderInput);
  }
}
