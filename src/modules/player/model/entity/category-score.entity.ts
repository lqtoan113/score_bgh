// category-score.entity.ts

import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { MatchPlayer } from './match-player.entity';
import { Category } from 'src/modules/games/model/entity/category.entity';

@Entity()
export class CategoryScore {
  @PrimaryColumn()
  categoryId: number;

  @PrimaryColumn()
  matchPlayerId: number;

  @Column()
  score: number;

  @ManyToOne(() => Category, category => category.categoryScores)
  category: Category;

  @ManyToOne(() => MatchPlayer, matchPlayer => matchPlayer.categoryScores)
  matchPlayer: MatchPlayer;
}

