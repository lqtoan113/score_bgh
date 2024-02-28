import { Injectable } from "@nestjs/common";
import { Player } from "../entity/player.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePlayerDto } from "../dto/player.dto";

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) { }

  async findAllPlayer() {
    return this.playerRepository.find();
  }

  async createNewPlayer(payload: CreatePlayerDto) {

    const newPlayer = this.playerRepository.create(payload);

    return this.playerRepository.save(newPlayer);
  }
}