import { Module } from '@nestjs/common';
import { FooController } from './api/foo.controller';
import { FooService } from './service/foo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FooEntity } from './persistance/foo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FooEntity])],
  controllers: [FooController],
  providers: [FooService],
})
export class FooModule {}
