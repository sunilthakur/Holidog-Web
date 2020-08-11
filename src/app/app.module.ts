import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddBooksComponent } from './components/books/add-books/add-books.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { EditAuthorComponent } from './components/author/edit-author/edit-author.component';
import { AddAuthorComponent } from './components/author/add-author/add-author.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AddBooksComponent,
    EditBookComponent,
    EditAuthorComponent,
    AddAuthorComponent,
    AuthorListComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule,
    AppRoutingModule, ReactiveFormsModule,
    HttpClientModule, NgxPaginationModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
