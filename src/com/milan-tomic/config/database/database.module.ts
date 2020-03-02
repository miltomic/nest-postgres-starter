import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentModule } from '../environment.module';
import * as OrmConfig from './ormconfig';


@Module({
  imports: [
    // TODO see if we can avoid re-importing it everywhere
    EnvironmentModule,
    TypeOrmModule.forRoot(OrmConfig),
  ],
})
export class DatabaseModule {
}