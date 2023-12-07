import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from './schema/book.schema';
import { BookDto } from './dto/create.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
  ) {}

  async list(): Promise<Book[]> {
    const books = await this.bookModel.find();
    return books;
  }

  async create(book: BookDto): Promise<Book> {
    const createdBook = new this.bookModel(book);
    return createdBook.save();
  }

  async findById(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id);

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  async updateById(id: string, book: BookDto): Promise<Book> {
    const updatedBook = await this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });

    if (!updatedBook) {
      throw new NotFoundException('Book not found');
    }

    return updatedBook;
  }

  async deleteBookById(id: string): Promise<any> {
    const book =  await this.bookModel.findByIdAndDelete(id);
    return book;
  }
}
