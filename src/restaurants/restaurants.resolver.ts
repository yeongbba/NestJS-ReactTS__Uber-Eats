import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  constructor(private readonly restaurantService: RestaurantService) {}
  @Query((returns) => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }
}
