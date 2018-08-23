import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IBook } from '../models/book.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() onAddBook = new EventEmitter<IBook>();

  book: IBook = {title: "", author: ""};

  constructor() { }

  ngOnInit() {
  }

  addBook() {
    if (this.book.title.trim() != "" && this.book.author.trim() != "") {
      this.onAddBook.emit(this.book);
    }
  }

}
