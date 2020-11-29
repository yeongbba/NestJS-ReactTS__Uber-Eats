import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantDto {
  @Field((type) => String)
  name: string;
}
