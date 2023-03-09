import { Module } from '@nestjs/common';
import { EdzestervController } from './edzesterv.controller';
import { EdzestervService } from './edzesterv.service';

@Module({
  controllers: [EdzestervController],
  providers: [EdzestervService]
})
export class EdzestervModule {}
