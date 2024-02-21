import { Injectable } from "@nestjs/common";
import { BoardGame } from "../entity/board-game.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Match } from "../entity/match.entity";

@Injectable()
export class MatchService{
    constructor(
        @InjectRepository(Match)
        private userRepository: Repository<Match>,
    ) { }

 
  findAll() {
    return this.userRepository.find();
  }
}