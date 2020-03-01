import { Module } from '@nestjs/common';
import { FooController } from './api/foo.controller';
import { FooService } from './service/foo.service';

@Module({
  controllers: [FooController],
  providers: [FooService],
})
export class FooModule {}
