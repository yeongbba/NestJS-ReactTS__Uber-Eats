import { GetOrderOutput, GetOrderInput } from './dtos/get-order.dto';
import { GetOrdersOutput, GetOrdersInput } from './dtos/get-orders.dto';
import { User } from './../users/entities/user.entity';
import { AuthUser } from './../auth/auth-user.decorator';
import { Role } from './../auth/role.decorator';
import { CreateOrderOutput, CreateOrderInput } from './dtos/create-order.dto';
import { OrderService } from './orders.service';
import { Order } from './entities/order.entity';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

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

  @Query((returns) => GetOrdersOutput)
  @Role(['Any'])
  async getOrders(
    @AuthUser() user: User,
    @Args('input') getOrdersInput: GetOrdersInput,
  ): Promise<GetOrdersOutput> {
    return this.ordersService.getOrders(user, getOrdersInput);
  }

  @Query((returns) => GetOrderOutput)
  @Role(['Any'])
  async getOrder(
    @AuthUser() user: User,
    @Args('input') getOrderInput: GetOrderInput,
  ): Promise<GetOrderOutput> {
    return this.ordersService.getOrder(user, getOrderInput);
  }
}
