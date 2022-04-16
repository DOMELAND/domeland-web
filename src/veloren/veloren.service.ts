import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Body } from './entities/Body';

//
@Injectable()
class VelorenService {
  constructor(
    @InjectRepository(Body)
    private velorenRepo: Repository<Body>,
  ) {}
  findAll(): Promise<Body[]> {
    return this.velorenRepo.find();
  }
}
export default VelorenService;
