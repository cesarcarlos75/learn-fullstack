import { Component } from '@angular/core';
import { IBook } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: IBook[] = [{title: 'Bird Box', author: 'Josh Malerman'}];

  addBook(book: IBook) {
    const newBook = Object.assign({}, book);
    this.books.push(newBook);
    this.books.sort(compare);

    function compare(a,b) {
      if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
      return 0;
    }
  }
}
