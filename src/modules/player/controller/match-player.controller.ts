import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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

@Get(':id')
getAllMatchPlayerByMatchId(@Param('id') matchId:number): Promise<MatchPlayer[]> {
    return this.matchPlayerService.findAllMatchPlayerByMatchId(matchId);
  }
  
@Post()
createNewMatchPlayer(@Body() createMatchPlayer: CreateMatchPlayerDto []){
    return this.matchPlayerService.createNewMatchPlayers(createMatchPlayer);
}
}