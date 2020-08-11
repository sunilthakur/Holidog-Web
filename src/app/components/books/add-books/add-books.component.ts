import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../../../core/services/books.service';
import { AuthorsService } from '../../../core/services/authors.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  public bookForm: FormGroup;
  public submitted: boolean;
  public authorList: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private bookService: BooksService, private authorService: AuthorsService) {
    this.getAuthorList();
  }

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      isbn: ['', Validators.required],
      authorId: 0
    });
  }

  get f() { return this.bookForm.controls; }

  saveBookDetails() {
    this.submitted = true;
    if (this.bookForm.invalid) {
      alert("Please fill the required fields");
      return;
    }
    this.bookForm.value.authorId = +this.bookForm.value.authorId;
    this.bookService.saveBookDetails(this.bookForm.value).subscribe(res => {
      if (res) {
        this.router.navigate(['/']);
      } else {
        alert('Error while saving book details');
      }
    }, error => {
      alert(error);
    }
    );
  }

  goBack() {
    this.router.navigate(['/']);
  }

  getAuthorList() {
    let model = {
      pageNo: 1,
      recordsPerPage: 99999,
      sortBy: "firstName",
      sortOrder: "asc"
    }
    this.authorService.getAuthorPagedList(model).subscribe(res => {
      let obj: any = res;
      if (obj) {
        let modified = obj.list.map(v => ({ authorId: v.authorId, authorName: (v.firstName + ' ' + v.lastName) }));
        this.authorList = modified;
      }
    })
  }
}