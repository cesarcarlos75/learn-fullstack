import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../models/book.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input('data') books: IBook[];

  constructor() { }

  ngOnInit() {
  }

}
