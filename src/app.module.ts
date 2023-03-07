import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import EdzesNapok from './Entity/edzesnapok.entity';
import Edzesterv from './Entity/edzesterv.entity';
import Gyakorlat from './Entity/gyakorlat.entity';
import Izomcsoportok from './Entity/izomcsoportok.entity';
import Token from './Entity/token.entity';
import User from './Entity/user.entity';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
