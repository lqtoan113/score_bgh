import { Injectable } from "@nestjs/common";
import { BoardGame } from "../entity/board-game.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class BoardGameService{
    constructor(
        @InjectRepository(BoardGame)
        private userRepository: Repository<BoardGame>,
    ) { }

 
  findAll() {
    return this.userRepository.find();
  }
}