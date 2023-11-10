import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    let hello = this.appService.getHello();
    console.log(hello);
    return `{
      ATN employé essence : ${hello.ATNemployeEssence} -------------
      ATN employé diesel : ${hello.ATNemployeDiesel} -------------
      ATN employeur essence : ${hello.ATNemployeurEssence} -------------
      ATN employeur diesel : ${hello.ATNemployeurDiesel} -------------
    }`;
  }
}
