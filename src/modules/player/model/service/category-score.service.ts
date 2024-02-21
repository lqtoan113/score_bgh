import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryScore } from "../entity/category-score.entity";

@Injectable()
export class CategoryScoreService{
    constructor(
        @InjectRepository(CategoryScore)
        private userRepository: Repository<CategoryScore>,
    ) { }

 
  findAll() {
    return this.userRepository.find();
  }
}