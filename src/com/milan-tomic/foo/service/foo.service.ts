import { FooDto } from './foo.dto';
import { Injectable } from '@nestjs/common';
import { FooEntity } from '../persistance/foo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { entities } from '../../config/database/ormconfig';

@Injectable()
export class FooService {
  constructor(
    @InjectRepository(FooEntity)
    private readonly fooEntityRepository: Repository<FooEntity>,
  ) {}
  async getFoos(): Promise<FooDto[]> {
    const fooEntities = await this.fooEntityRepository.find();
    return fooEntities.map(entity => new FooDto(entity.name))
  }
}
