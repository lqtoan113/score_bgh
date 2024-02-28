import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entity/category.entity';
import { CreateCategoryDto } from '../dto/category.dto';
import { BoardGameService } from './board-game.service';


@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly boardGameService: BoardGameService,
  ) { }

  async findAllCategory(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async createNewCategory(categoryData: CreateCategoryDto): Promise<Category> {

    const board_game = await this.boardGameService.findOneGameById(categoryData.boardGameId)
    const category = new Category();

    category.boardGame = board_game;
    category.categoryName = categoryData.categoryName;

    return this.categoryRepository.save(category);
  }

  async findAllCategoryByGameId(boardGameId: number): Promise<Category[]> {
    const allCate = await this.categoryRepository.createQueryBuilder('category')
      .innerJoinAndSelect('category.boardGame', 'boardgame')
      .where('boardgame.boardGameId = :boardGameId', { boardGameId }) // Corrected parameter name
      .getMany();

    return allCate;
}

}
