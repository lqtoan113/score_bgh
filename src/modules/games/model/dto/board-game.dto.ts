import { IsNotEmpty, IsNumber,IsDate } from 'class-validator';
export class CreateBoardGameDto{
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    description: string;
  
}