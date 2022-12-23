import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InputCat } from './dto/cat.input';
import { UpdateCat } from './dto/cat.update';
import Cat from './entities/cat.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat) private readonly catRepository: Repository<Cat>,
  ) {}

  async create(inputCat: InputCat) {
    return await this.catRepository.create(inputCat).save();
  }

  async findAll() {
    return await this.catRepository.find();
  }

  async findOne(id: number) {
    return await this.catRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateCat: UpdateCat) {
    const result = await this.catRepository.update({ id: id }, updateCat);
    return result.affected > 0 ? await this.findOne(id) : null;
  }

  async delete(id: number) {
    const cat = await this.catRepository.findOne({ where: { id: id } });
    if (!cat) throw new Error('Cat not found!');
    const result = await this.catRepository.softDelete({ id: id });
    return result.affected > 0 ? true : false;
  }
}
