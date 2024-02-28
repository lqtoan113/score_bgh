import { Body, Controller, Get, Post } from "@nestjs/common";
import { MatchPlayerService } from "../model/service/match-player.service";
import { CreateMatchPlayerDto } from "../model/dto/match-player.dto";
import { MatchPlayer } from "../model/entity/match-player.entity";

@Controller('match-player')
export class MatchPlayerController{
    constructor(private readonly matchPlayerService: MatchPlayerService){}
@Get()
getAllMatchPlayer(): Promise<MatchPlayer[]> {
    return this.matchPlayerService.findAllMatchPlayer();
  }
@Post()
createNewMatchPlayer(@Body() createMatchPlayer: CreateMatchPlayerDto []){
    return this.matchPlayerService.createNewMatchPlayers(createMatchPlayer);
}
}