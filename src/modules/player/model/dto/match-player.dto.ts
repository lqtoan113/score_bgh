import { IsNotEmpty, IsNumber,IsDate } from 'class-validator';
export class CreateMatchPlayerDto{
    @IsNotEmpty()
    playerId: number;
    @IsNotEmpty()
    matchId: number;
  
}