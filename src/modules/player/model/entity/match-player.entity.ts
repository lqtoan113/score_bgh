// src/match-player/match-player.entity.ts
import { Match } from 'src/modules/games/model/entity/match.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { CategoryScore } from './category-score.entity';
import { Player } from './player.entity';


@Entity()
export class MatchPlayer {
  @PrimaryGeneratedColumn()
  matchPlayerId: number;

  @ManyToOne(() => Player, player => player.matchPlayers)
  playerId: Player;

  @ManyToOne(() => Match, match => match.matchPlayers)
  match: Match;

  @Column()
  totalResult: number;

  @OneToMany(() => CategoryScore, categoryScore => categoryScore.categoryScoreId)
  categoryScores: CategoryScore[];
}
