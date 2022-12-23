import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class InputCat {
  @Field(() => String)
  readonly name!: string;

  @Field(() => Int)
  readonly age!: number;

  @Field({ nullable: true })
  readonly createdAt: Date;

  @Field({ nullable: true })
  readonly updatedAt: Date;

  @Field({ nullable: true })
  readonly deletedAt: Date | null;
}
