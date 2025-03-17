import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}
 
  @Get()
  findAll(@Res() response) {
    // return response.status(200).send('Listagem de books');
    return response.status(200).json({ message: 'Listagem de books' });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Livro ${id}`;
  }

  @Post('create-post')
  create(@Body() body) {
    return body;
  }

  //   @Put(':id')
  @Patch(':id')
  upsdate(@Param('id') id: string, @Body() body) {
    console.log('body ->', body);
    return `Upadate books - ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Excluindo o book com o id -> ${id}`;
  }
}
