import { TypeOrmModule } from "@nestjs/typeorm";
import { MatchPlayerService } from "../player/model/service/match-player.service";
import { BoardGame } from "./model/entity/board-game.entity";
import { Category } from "./model/entity/category.entity";
import { Match } from "./model/entity/match.entity";
import { BoardGameService } from "./model/service/board-game.service";
import { CategoryService } from "./model/service/category.service";
import { Module } from "@nestjs/common";
import { MatchService } from "./model/service/match.service";
import { BoardGameController } from "./controller/board-game.controller";
import { CategoryController } from "./controller/category.controller";
import { MatchController } from "./controller/match.controller";

@Module({
    imports: [TypeOrmModule.forFeature([BoardGame,Category,Match])],
    controllers: [BoardGameController,CategoryController,MatchController],
    providers: [BoardGameService,CategoryService,MatchService],
  })
  export class GameModule {}
  