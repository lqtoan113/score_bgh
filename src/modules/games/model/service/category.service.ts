import { Injectable } from "@nestjs/common";
import { BoardGame } from "../entity/board-game.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "../entity/category.entity";

@Injectable()
export class CategoryService{
    constructor(
        @InjectRepository(Category)
        private userRepository: Repository<Category>,
    ) { }

 
  findAll() {
    return this.userRepository.find();
  }
}