import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import User from './Entity/user.entity';

@Injectable()
export class AppService {
  constructor(private dataSource: DataSource) {}

  getHello(): string {
    return 'Hello World!';
  }
}
