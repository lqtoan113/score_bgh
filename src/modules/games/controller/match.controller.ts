import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { Match } from '../model/entity/match.entity';
import { MatchService } from '../model/service/match.service';
import { CreateMatchDto } from '../model/dto/match.dto';


@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get()
  getAllMatch(): Promise<Match[]> {
    return this.matchService.findAllMatch();
  }
  
  @Get(':id')
  getAllMatchByBoardGame(@Param('id') boardGameId: number): Promise<Match[]> {
    return this.matchService.findAllMatchByGameId(boardGameId);
  }

  @Post()
  createNewMatch(@Body() match: CreateMatchDto): Promise<Match> {
    return this.matchService.createNewMatch(match);
  }
}
