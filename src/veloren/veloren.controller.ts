import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Body } from './entities/Body';

@Controller('veloren')
class VelorenController {
  constructor(
    @InjectRepository(Body)
    private readonly velorenRepo: Repository<Body>,
  ) {}
  @Get()
  async findAll(): Promise<Body[]> {
    return await this.velorenRepo.find();
  }
}

export default VelorenController;
