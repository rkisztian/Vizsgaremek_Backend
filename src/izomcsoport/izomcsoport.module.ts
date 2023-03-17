import { Module } from '@nestjs/common';
import { IzomcsoportService } from './izomcsoport.service';

@Module({
  providers: [IzomcsoportService]
})
export class IzomcsoportModule {}
