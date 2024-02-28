import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';
import { BoardGame } from '../entity/board-game.entity';
export class CreateCategoryDto {
    @IsNotEmpty()
    categoryName: string;
    @IsNotEmpty()
    image: string;
    @IsNotEmpty()
    boardGameId: number;

}