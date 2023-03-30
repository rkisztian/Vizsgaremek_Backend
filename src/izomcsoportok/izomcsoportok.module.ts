import { Module } from '@nestjs/common';
import { IzomcsoportokService } from './izomcsoportok.service';
import { IzomcsoportokController } from './izomcsoportok.controller';

@Module({
  controllers: [IzomcsoportokController],
  providers: [IzomcsoportokService]
})
export class IzomcsoportokModule {}
