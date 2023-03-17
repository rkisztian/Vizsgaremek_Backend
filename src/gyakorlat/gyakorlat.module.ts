import { Module } from '@nestjs/common';
import { GyakorlatController } from './gyakorlat.controller';

@Module({
  controllers: [GyakorlatController]
})
export class GyakorlatModule {}
