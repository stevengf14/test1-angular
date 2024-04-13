import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Book } from './common/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test1';
  //myVar: number;
  myVar = 0;
  myArr = [];
  myBook: Book;
  myBooks: Book[];

  constructor() {
    //this.myVar = 0;
    this.myBook = {
      id: 1,
      title: '',
    };

    this.myBooks = [
      {
        id: 1,
        title: '',
      },
    ];
  }
}
