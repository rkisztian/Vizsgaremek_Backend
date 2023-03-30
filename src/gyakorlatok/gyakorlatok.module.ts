import { Module } from '@nestjs/common';
import { GyakorlatokService } from './gyakorlatok.service';
import { GyakorlatokController } from './gyakorlatok.controller';

@Module({
  controllers: [GyakorlatokController],
  providers: [GyakorlatokService],
})
export class GyakorlatokModule {}
