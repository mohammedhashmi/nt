import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';
import { BookDto } from './dto/create.dto';
import { updateBookDto } from './dto/update.dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async list(): Promise<Book[]> {
    return await this.bookService.list();
  }

  @Post()
  async create(@Body() book: BookDto) {
    return await this.bookService.create(book);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Book> {
    return await this.bookService.findById(id);
  }

  @Put(':id')
  async updateById(@Param('id') id: string, @Body() book: updateBookDto) {
    return await this.bookService.updateById(id, book);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<Book> {
    return await this.bookService.deleteBookById(id);
  }
}
