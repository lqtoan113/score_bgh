// src/player/player.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MatchPlayer } from './match-player.entity';


@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  playerId: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  nickname: string;

  @OneToMany(() => MatchPlayer, matchPlayer => matchPlayer.playerId)
  matchPlayers: MatchPlayer[];
}
