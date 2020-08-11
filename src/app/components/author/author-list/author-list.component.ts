import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../core/services/authors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  ngOnInit() {
  }
  public pageNo: number = 1;
  public total: number;
  public search: string;
  public loading: boolean;
  public itemsPerPage: number = 10;

  public authorList: any;
  constructor(private authorService: AuthorsService, private router: Router) {
    this.getAuthorPagedList(1);
  }

  getAuthorPagedList(pageNo: number) {
    let model = {
      pageNo: pageNo,
      recordsPerPage: this.itemsPerPage,
      sortBy: "firstName",
      sortOrder: "desc",
      search: this.search
    }
    this.authorService.getAuthorPagedList(model).subscribe(res => {
      let obj: any = res;
      if (obj) {
        this.authorList = obj.list;
        this.total = obj.totalCount;
        this.pageNo = pageNo;
        this.loading = false;
      }
    })
  }

  editAuthor(id) {
    localStorage.setItem("authorId", id);
    this.router.navigate(['/edit-author']);
  }

  deleteAuthor(id) {
    this.authorService.removeAuthor(id).subscribe(res => {
      let obj: any = res;
      if (obj) {
        alert(obj.message);
        this.getAuthorPagedList(this.pageNo);
      }
    });
  }
}
