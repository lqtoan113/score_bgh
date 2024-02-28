// game.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardGame } from '../entity/board-game.entity';
import { CreateBoardGameDto } from '../dto/board-game.dto';

@Injectable()
export class BoardGameService {
  constructor(
    @InjectRepository(BoardGame)
    private readonly gameRepository: Repository<BoardGame>,
  ) {}

  async findAllBoardGame(): Promise<BoardGame[]> {
    return this.gameRepository.find();
  }

  async findOneGameById(boardGameId: number): Promise<BoardGame> {
    return this.gameRepository.findOneBy({boardGameId});
  }

  async createNewBoardGame(game: CreateBoardGameDto): Promise<BoardGame> {
    const boardGame = this.gameRepository.create(game);

    return this.gameRepository.save(boardGame);
  }
}
