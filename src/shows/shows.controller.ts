import { Controller, Get, Post, Body } from '@nestjs/common';
import { ShowRequest, ShowResponse } from './models';
import * as cuid from 'cuid';
import { runInThisContext } from 'vm';
@Controller('shows')
export class ShowsController {

    data = [{
        id: '1', title: 'Show 1',
    },
    {
        id: '2', title: 'Show 2',
    }];
    @Get()
    getData() {
        return this.data;
    }

    @Post()
    addShow(@Body() show: ShowRequest) {
        const newShow: ShowResponse = {
            id: cuid(),
            title: show.title,
        };
        this.data.push(newShow);
        return newShow;
    }
}
