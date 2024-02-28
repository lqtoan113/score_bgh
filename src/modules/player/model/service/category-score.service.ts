import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryScore } from "../entity/category-score.entity";
import { CreateCategoryScoreDto } from "../dto/category-score.dto";
import { MatchPlayer } from "../entity/match-player.entity";
import { Category } from "src/modules/games/model/entity/category.entity";

@Injectable()
export class CategoryScoreService {
  constructor(
    @InjectRepository(CategoryScore)
    private categoryScoreRepository: Repository<CategoryScore>,
    @InjectRepository(MatchPlayer)
    private matchPlayerRepository: Repository<MatchPlayer>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) { }


  async findAllCategoryScore() {
    return this.categoryScoreRepository.find();
  }

  async createCategoryScore(payloads: CreateCategoryScoreDto[]) {
    const newCategoryScoresArray = [];

    for (const payload of payloads) {
      const newCategoryScores = new CategoryScore();
      const matchPlayer = await this.matchPlayerRepository.findOneBy({ matchPlayerID: payload.matchPlayerId });
      const category = await this.categoryRepository.findOneBy({ categoryId: payload.categoryId });

      newCategoryScores.matchPlayer = matchPlayer;
      newCategoryScores.category = category;
      newCategoryScores.score = payload.score;
      newCategoryScores.categoryId = category.categoryId;

      const savedMatchPlayer = await this.categoryScoreRepository.save(newCategoryScores);
      newCategoryScoresArray.push(savedMatchPlayer);
    }

    return newCategoryScoresArray;
  }
}