import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    // envFilePath: 'env/dev/.dev.env',
    ignoreEnvFile: process.env.NODE_ENV === 'prod',
  })],
})
export class EnvironmentModule {
}