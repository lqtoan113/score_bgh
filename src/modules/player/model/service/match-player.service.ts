import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MatchPlayer } from "../entity/match-player.entity";

@Injectable()
export class MatchPlayerService{
    constructor(
        @InjectRepository(MatchPlayer)
        private userRepository: Repository<MatchPlayer>,
    ) { }

 
  findAll() {
    return this.userRepository.find();
  }
}