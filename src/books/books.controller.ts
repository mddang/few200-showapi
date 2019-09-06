import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookRequest, BookResponse } from './models';
import { ShowResponse } from 'src/shows/models';
import * as cuid from 'cuid';
import { runInThisContext } from 'vm';

@Controller('books')
export class BooksController {
    data = [
        {
            id: '1', title: 'Lord of ring', author: 'J Tolkien', type: 'hardcover',
        },
        {
            id: '2', title: 'Harry potter', author: 'J.K. Rowling', type: 'ebook',
        },
        {
            id: '3', title: 'Into the woods', author: 'James Lapine', type: 'paperback',
        },
    ];

    @Get()
    getData() {
        return this.data;
    }

    @Post()
    addBook(@Body() book: BookRequest) {
        const newBook: BookResponse = {
            id: cuid(),
            title: book.title,
            author: book.author,
            type: book.type,
        };
        this.data.push(newBook);
        return newBook;
    }

}
