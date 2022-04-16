import { Body, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import VelorenController from './veloren.controller';
import VelorenService from './veloren.service';

@Module({
  imports: [TypeOrmModule.forFeature([Body])],
  controllers: [VelorenController],
  providers: [VelorenService],
})
class VelorenModule {}
export default VelorenModule;
