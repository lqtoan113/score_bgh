import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CreateCategoryDto } from '../model/dto/category.dto';
import { Category } from '../model/entity/category.entity';
import { CategoryService } from '../model/service/category.service';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardGame } from '../model/entity/board-game.entity';
import { Repository } from 'typeorm';


@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService,
  ) { }

  @Get()
  getAllCategory(): Promise<Category[]> {
    return this.categoryService.findAllCategory();
  }
  
  @Get(':id')
  getAllCategoryByBoardGame(@Param('id') boardGameId: number): Promise<Category[]> {
    return this.categoryService.findAllCategoryByGameId(boardGameId);

  }
  @Post()
  createNewCategory(@Body() categoryData: CreateCategoryDto): Promise<Category> {
    return this.categoryService.createNewCategory(categoryData);
  }
}
