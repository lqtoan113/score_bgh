// src/match/match.entity.ts
import { MatchPlayer } from 'src/modules/player/model/entity/match-player.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { BoardGame } from './board-game.entity';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  matchId: number;

  @Column()
  descriptionMatch: string;

  @Column()
  datePlay: Date;

  @ManyToOne(() => BoardGame, boardGame => boardGame.matches)
  boardGame: BoardGame;

  @OneToMany(() => MatchPlayer, matchPlayer => matchPlayer.matchPlayerId)
  matchPlayers: MatchPlayer[];
}
