import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
// import * as Joi from 'joi';
import { PlayerModule } from './modules/player/player.module';
import { GameModule } from './modules/games/game.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    // validationSchema: Joi.object({
    //   POSTGRES_DB: Joi.string().required(),
    //   POSTGRES_USER: Joi.string().required(),
    //   POSTGRES_PASSWORD: Joi.string().required(),
    //   POSTGRES_HOST: Joi.string().required(),
    //   POSTGRES_PORT: Joi.string().required(),
    // }),
  }),
  PlayerModule,GameModule,
  DatabaseModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
