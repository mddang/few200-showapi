import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowsController } from './shows/shows.controller';

@Module({
  imports: [],
  controllers: [AppController, ShowsController],
  providers: [AppService],
})
export class AppModule {}
