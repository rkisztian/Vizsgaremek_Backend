import { Module } from '@nestjs/common';
import { EdzesnapokService } from './edzesnapok.service';

@Module({
  providers: [EdzesnapokService]
})
export class EdzesnapokModule {}
