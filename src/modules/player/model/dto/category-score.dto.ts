import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';
export class CreateCategoryScoreDto {
    @IsNotEmpty()
    categoryId: number;
    @IsNotEmpty()
    matchPlayerId: number;
    @IsNumber()
    score: number;

}