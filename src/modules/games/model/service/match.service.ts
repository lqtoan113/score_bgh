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
    newMatch.boardGame =board_game;
    newMatch.descriptionMatch = match.descriptionMatch;

    return this.matchRepository.save(newMatch);
  }

  
  async findAllMatchByGameId(boardGameId: number): Promise<Match[]> {
    const allMatches = await this.matchRepository.createQueryBuilder('match')
      .innerJoinAndSelect('match.boardGame', 'boardgame')
      .where('boardgame.boardGameId = :boardGameId', { boardGameId })
      .getMany();
  
    return allMatches;
}

  
}
