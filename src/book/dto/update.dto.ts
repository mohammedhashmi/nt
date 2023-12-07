import { Category } from '../schema/book.schema';

export class updateBookDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly category: Category;
}
