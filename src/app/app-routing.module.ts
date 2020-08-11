import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddBooksComponent } from './components/books/add-books/add-books.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { AddAuthorComponent } from './components/author/add-author/add-author.component';
import { EditAuthorComponent } from './components/author/edit-author/edit-author.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';


const routes: Routes = [
  { path: '', component: BooksListComponent, pathMatch: 'full' },
  { path: 'add-books', component: AddBooksComponent },
  { path: 'edit-book', component: EditBookComponent },
  { path: 'add-author', component: AddAuthorComponent },
  { path: 'edit-author', component: EditAuthorComponent },
  { path: 'author-list', component: AuthorListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
