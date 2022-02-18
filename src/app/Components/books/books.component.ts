import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  Books:any;
  Token:any;
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getallBooks();
  }
  getallBooks()
  {
    this.bookService.getBooks(localStorage.getItem("token")).subscribe((data:any)=>{
      console.log(data);
      this.Books=data.book;
      console.log(this.Books)
      this.Books.reverse();
    })
  }
}
