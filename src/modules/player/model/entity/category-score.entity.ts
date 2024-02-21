// src/category-score/category-score.entity.ts
import { Category } from 'src/modules/games/model/entity/category.entity';
import { Entity, ManyToOne, PrimaryColumn, Column } from 'typeorm';
import { MatchPlayer } from './match-player.entity';


@Entity()
export class CategoryScore {
  @PrimaryColumn()
  categoryID: number;

  @PrimaryColumn()
  matchPlayerID: number;

  @Column()
  score: number;

  @ManyToOne(() => Category, category => category.categoryScores)
  category: Category;

  @ManyToOne(() => MatchPlayer, matchPlayer => matchPlayer.categoryScores)
  matchPlayer: MatchPlayer;
}
