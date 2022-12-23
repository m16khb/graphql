import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatResolver } from './cat.resolver';
import { CatService } from './cat.service';
import Cat from './entities/cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  providers: [CatResolver, CatService],
})
export class CatModule {}
