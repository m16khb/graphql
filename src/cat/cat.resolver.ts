import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { InputCat } from './dto/cat.input';
import { UpdateCat } from './dto/cat.update';
import Cat from './entities/cat.entity';

/**
 * graphql은 resolver가 controller를 대신하는 것 같음
 */
@Resolver('Cat')
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query(() => [Cat])
  async findAll() {
    return await this.catService.findAll();
  }

  @Query(() => Cat)
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.catService.findOne(id);
  }

  @Mutation(() => Cat)
  async create(@Args('inputCat') inputCat: InputCat) {
    return await this.catService.create(inputCat);
  }

  @Mutation(() => Cat)
  async update(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCat') updateCat: UpdateCat,
  ) {
    const result = await this.catService.update(id, updateCat);
    if (result) return result;
    else throw new Error('update fail');
  }

  @Mutation(() => Boolean)
  async delete(@Args('id', { type: () => Int }) id: number) {
    const result = await this.catService.delete(id);
    return result;
  }
}
