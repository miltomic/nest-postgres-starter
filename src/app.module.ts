import { Module } from '@nestjs/common';
import { FooModule } from './com/milan-tomic/foo/foo.module';

@Module({
  imports: [FooModule],
})
export class AppModule {
}
