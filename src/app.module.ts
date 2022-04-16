import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import VelorenModule from './veloren/veloren.module';

let database_path = process.env.DOMELAND_DATABASE;

if (!database_path) {
  console.error('Environment variable "DOMELAND_DATABASE" is not set.');
  process.exit(1);
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: database_path,
      autoLoadEntities: true,
      synchronize: true,
    }),
    VelorenModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
