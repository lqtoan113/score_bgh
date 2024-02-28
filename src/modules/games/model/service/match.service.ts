import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Match } from '../entity/match.entity';
import { Repository } from 'typeorm';
import { CreateMatchDto } from '../dto/match.dto';
import { BoardGameService } from './board-game.service';


@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match)
    private readonly matchRepository:Repository<Match>,
   
    private readonly boardGameService: BoardGameService,
  ) {}

  async findAllMatch(): Promise<Match[]> {
    return this.matchRepository.find();
  }
 

  async createNewMatch(match: CreateMatchDto): Promise<Match> {

    const board_game = await this.boardGameService.findOneGameById(match.boardGameId);
    const newMatch = new Match();

    newMatch.datePlay= new Date();
    newMatch.boardGameId =board_game;
    newMatch.descriptionMatch = match.descriptionMatch;

    return this.matchRepository.save(newMatch);
  }

  
  async findAllMatchByGameId(board_gameId: number): Promise<Match[]> {
    const allMatches = await this.matchRepository.createQueryBuilder('match')
      .innerJoinAndSelect('match.board_game', 'board_game')
      .where('board_game.board_gameId = :board_gameId', { board_gameId })
      .getMany();
  
    return allMatches;
  }
  
}
