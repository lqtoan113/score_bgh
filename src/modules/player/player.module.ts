import { Module } from "@nestjs/common";
import { Category } from "../games/model/entity/category.entity";
import { CategoryScore } from "./model/entity/category-score.entity";
import { Player } from "./model/entity/player.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PlayerController } from "./controller/player.controller";
import { PlayerService } from "./model/service/player.service";
import { MatchPlayer } from "./model/entity/match-player.entity";
import { MatchPlayerService } from "./model/service/match-player.service";
import { CategoryScoreService } from "./model/service/category-score.service";
import { CategoryService } from "../games/model/service/category.service";
import { BoardGame } from "../games/model/entity/board-game.entity";
import { BoardGameService } from "../games/model/service/board-game.service";
import { CategoryScoreController } from "./controller/category-score.controller";
import { MatchPlayerController } from "./controller/match-player.controller";
import { Match } from "../games/model/entity/match.entity";
import { MatchService } from "../games/model/service/match.service";

@Module({
    imports: [TypeOrmModule.forFeature([Player,MatchPlayer,CategoryScore,Category,BoardGame,Match])],
    controllers: [PlayerController,MatchPlayerController,CategoryScoreController],
    providers: [PlayerService,MatchPlayerService,CategoryScoreService,CategoryService,BoardGameService,MatchService],
  })
  export class PlayerModule {}
  