import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowsController } from './shows/shows.controller';
import { BooksController } from './books/books.controller';

@Module({
  imports: [],
  controllers: [AppController, ShowsController, BooksController],
  providers: [AppService],
})
export class AppModule {}
