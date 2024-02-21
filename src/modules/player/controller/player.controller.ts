import { Controller, Get } from "@nestjs/common";

@Controller('player')
export class PlayerController {
  @Get()
  findAll(): string {
    return 'This action returns all player';
  }
}