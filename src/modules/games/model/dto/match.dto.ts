import { IsNotEmpty, IsNumber,IsDate } from 'class-validator';
export class CreateMatchDto{
    @IsNotEmpty()
    descriptionMatch: string;
    @IsNumber()
    boardGameId: number;
}