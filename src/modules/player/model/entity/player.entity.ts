// src/player/player.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MatchPlayer } from './match-player.entity';


@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  playerID: number;

  @Column()
  name: string;

  @Column()
  age: Date;

  @Column()
  nickname: string;

  @OneToMany(() => MatchPlayer, matchPlayer => matchPlayer.player)
  matchPlayers: MatchPlayer[];
}
