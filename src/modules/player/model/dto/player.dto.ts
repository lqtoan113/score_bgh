import { IsNotEmpty, IsNumber,IsDate } from 'class-validator';
export class CreatePlayerDto{
    @IsNotEmpty()
    name: string;
    @IsNumber()
    age: number;
    nickname: string;
  
}