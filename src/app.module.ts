import { Module } from '@nestjs/common';
import { FooModule } from './com/milan-tomic/foo/foo.module';
import { DatabaseModule } from './com/milan-tomic/config/database/database.module';
import { EnvironmentModule } from './com/milan-tomic/config/environment.module';

@Module({
  imports: [
    // Configuration
    EnvironmentModule,
    DatabaseModule,
    // Business Logic
    FooModule,
  ],
})
export class AppModule {
}
