import { Body, Controller, Get, Post } from "@nestjs/common";
import { Player } from "../model/entity/player.entity";
import { PlayerService } from "../model/service/player.service";
import { CreatePlayerDto } from "../model/dto/player.dto";

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}
  @Get()
  getAllPlayer(): Promise<Player[]> {
    return this.playerService.findAllPlayer();
  }
  @Post()
  createNewPlayer(@Body() createPlayerDto: CreatePlayerDto){
    return this.playerService.createNewPlayer(createPlayerDto);
  }
}