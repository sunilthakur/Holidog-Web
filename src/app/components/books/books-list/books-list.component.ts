import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../core/services/books.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {


  ngOnInit() {
  }
  public pageNo: number = 1;
  public total: number;
  public search: string;
  public loading: boolean;
  public itemsPerPage: number = 10;

  public booksList: any;
  constructor(private bookService: BooksService, private router: Router) {
    this.getBooksPagedList(1);
  }

  getBooksPagedList(pageNo: number) {
    let model = {
      pageNo: pageNo,
      recordsPerPage: this.itemsPerPage,
      sortBy: "name",
      sortOrder: "desc",
      search: this.search
    }
    this.bookService.getBooksPagedList(model).subscribe(res => {
      let obj: any = res;
      if (obj) {
        this.booksList = obj.list;
        this.total = obj.totalCount;
        this.pageNo = pageNo;
        this.loading = false;
      }
    })
  }

  deleteBook(id) {
    this.bookService.removeBook(id).subscribe(res => {
      let obj: any = res;
      if (obj) {
        alert(obj.message);
        this.getBooksPagedList(this.pageNo);
      }
    });
  }

  editBook(id) {
    localStorage.setItem("bookId", id);
    this.router.navigate(['/edit-book']);
  }
}
