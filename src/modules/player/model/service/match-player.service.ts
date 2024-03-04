import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MatchPlayer } from "../entity/match-player.entity";
import { CreateMatchPlayerDto } from "../dto/match-player.dto";
import { Match } from "src/modules/games/model/entity/match.entity";
import { Player } from "../entity/player.entity";

@Injectable()
export class MatchPlayerService {
    constructor(
        @InjectRepository(MatchPlayer)
        private matchPlayerRepository: Repository<MatchPlayer>,
        @InjectRepository(Match)
        private matchRepository: Repository<Match>,
        @InjectRepository(Player)
        private playerRepository: Repository<Player>,
    ) { }


    async findAllMatchPlayer() {
        return this.matchPlayerRepository.find();
    }
    async createNewMatchPlayers(payloads: CreateMatchPlayerDto[]) {
        const newMatchPlayersArray = [];

        for (const payload of payloads) {
            const newMatchPlayers = new MatchPlayer();
            const match = await this.matchRepository.findOneBy({ matchId: payload.matchId });
            const player = await this.playerRepository.findOneBy({ playerId: payload.playerId });

            newMatchPlayers.match = match;
            newMatchPlayers.playerId = player;
            newMatchPlayers.totalResult = 1;
            const savedMatchPlayer = await this.matchPlayerRepository.save(newMatchPlayers);
            newMatchPlayersArray.push(savedMatchPlayer);
        }

        return newMatchPlayersArray;
    }
    async findAllMatchPlayerByMatchId(matchId: number): Promise<MatchPlayer[]> {
        const allMatchPlayers = await this.matchPlayerRepository.createQueryBuilder('matchPlayer')
            .innerJoinAndSelect('matchPlayer.match', 'match')
            .where('match.matchId = :matchId', { matchId })
            .getMany();

        return allMatchPlayers;
    }

}