import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateCat {
  @Field(() => String)
  readonly name?: string;

  @Field(() => Int)
  readonly age?: number;
}
