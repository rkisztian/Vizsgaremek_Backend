import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EdzestervModule } from './edzesterv/edzesterv.module';
import { EdzesnapokController } from './edzesnapok/edzesnapok.controller';
import { EdzesnapokModule } from './edzesnapok/edzesnapok.module';
import { IzomcsoportokModule } from './izomcsoportok/izomcsoportok.module';
import { GyakorlatokModule } from './gyakorlatok/gyakorlatok.module';
import EdzesNapok from './Entity/edzesnapok.entity';
import Edzesterv from './Entity/edzesterv.entity';
import Gyakorlat from './Entity/gyakorlat.entity';
import Izomcsoportok from './Entity/izomcsoportok.entity';
import Token from './Entity/token.entity';
import User from './Entity/user.entity';
import { IzomcsoportokController } from './izomcsoportok/izomcsoportok.controller';
import { GyakorlatokService } from './gyakorlatok/gyakorlatok.service';
import { IzomcsoportokService } from './izomcsoportok/izomcsoportok.service';
import { EdzesnapokService } from './edzesnapok/edzesnapok.service';
import { EdzestervService } from './edzesterv/edzesterv.service';
import { EdzestervController } from './edzesterv/edzesterv.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'sky_fitness',
      entities: [User, Token, Edzesterv, EdzesNapok, Gyakorlat, Izomcsoportok],
      synchronize: true,
    }),
    AuthModule,
    EdzestervModule,
    EdzesnapokModule,
    GyakorlatokModule,
    IzomcsoportokModule,
    GyakorlatokModule,
  ],
  controllers: [
    AppController,
    EdzesnapokController,
    IzomcsoportokController,
    EdzestervController,
    EdzesnapokController,
  ],
  providers: [
    AppService,
    GyakorlatokService,
    IzomcsoportokService,
    EdzesnapokService,
    EdzestervService,
  ],
})
export class AppModule {}
