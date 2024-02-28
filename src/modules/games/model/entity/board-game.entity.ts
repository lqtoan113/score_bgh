// src/board-game/board-game.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Category } from './category.entity';
import { Match } from './match.entity';

@Entity()
export class BoardGame {
  @PrimaryGeneratedColumn()
  boardGameId: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Category, category => category.boardGameId)
  categories: Category[];

  @OneToMany(() => Match, match => match.boardGameId)
  matches: Match[];
}
