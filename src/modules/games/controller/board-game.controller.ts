// BoardGame.controller.ts

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BoardGame } from '../model/entity/board-game.entity';
import { BoardGameService } from '../model/service/board-game.service';
import { CreateBoardGameDto } from '../model/dto/board-game.dto';

@Controller('board-game')
export class BoardGameController {
  constructor(private readonly boardGameService: BoardGameService) {}

  @Get()
  getAllBoardGame(): Promise<BoardGame[]> {
    return this.boardGameService.findAllBoardGame();
  }

  @Get(':id')
  getOneBoardGameById(@Param('id') id: number): Promise<BoardGame> {
    return this.boardGameService.findOneGameById(id);
  }

  @Post()
  createNewBoardGame(@Body() boardGame: CreateBoardGameDto): Promise<BoardGame> {
    return this.boardGameService.createNewBoardGame(boardGame);
  }
}
