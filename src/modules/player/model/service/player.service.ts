import { Injectable } from "@nestjs/common";
import { Player } from "../entity/player.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class PalyerService {
    constructor(
        @InjectRepository(Player)
        private userRepository: Repository<Player>,
    ) { }

 
  findAll() {
    return this.userRepository.find();
  }
}