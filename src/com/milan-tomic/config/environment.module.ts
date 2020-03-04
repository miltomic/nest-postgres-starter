import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    ignoreEnvFile: process.env.NODE_ENV === 'prod',
  })],
})
export class EnvironmentModule {
}