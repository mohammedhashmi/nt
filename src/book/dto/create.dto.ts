import { Category } from '../schema/book.schema';

export class BookDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly category: Category;
}
