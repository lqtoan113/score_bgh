// src/category/category.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { BoardGame } from './board-game.entity';
import { CategoryScore } from 'src/modules/player/model/entity/category-score.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  categoryId: number;

  @Column()
  categoryName: string;

  @Column()
  image: string;

  @ManyToOne(() => BoardGame, boardGame => boardGame.categories)
  boardGame: BoardGame;

  @OneToMany(() => CategoryScore, categoryScore => categoryScore.category)
  categoryScores: CategoryScore[];
}
