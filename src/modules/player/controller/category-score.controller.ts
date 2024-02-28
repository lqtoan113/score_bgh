import { Body, Controller, Get, Post } from "@nestjs/common";
import { MatchPlayerService } from "../model/service/match-player.service";
import { CreateMatchPlayerDto } from "../model/dto/match-player.dto";
import { CategoryScoreService } from "../model/service/category-score.service";
import { CreateCategoryScoreDto } from "../model/dto/category-score.dto";
import { Category } from "src/modules/games/model/entity/category.entity";
import { CategoryScore } from "../model/entity/category-score.entity";

@Controller('category-score')
export class CategoryScoreController{
    constructor(private readonly categoryScoreService: CategoryScoreService){}

@Get()
getAllCategoryScore(): Promise<CategoryScore[]> {
    return this.categoryScoreService.findAllCategoryScore();
  }

@Post()
createNewCategoryScore(@Body() createCategoryScore: CreateCategoryScoreDto []){
    return this.categoryScoreService.createCategoryScore(createCategoryScore);
}
}