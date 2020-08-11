import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from '../constants/uri'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) { }

  public getBooksPagedList(model: any): any {
    return this.http.post<any>(URI.getbooks, model);
  }

  public saveBookDetails(model: any): any {
    return this.http.post<any>(URI.saveBook, model);
  }

  public getBookById(id: number): any {
    return this.http.get<any>(URI.getBookById + "?bookId=" + id);
  }

  public updateBookDetails(model: any): any {
    return this.http.put<any>(URI.updateBookDetails, model);
  }

  public removeBook(id: number): any {
    return this.http.delete<any>(URI.deleteBook + "?bookId=" + id)
  }
}
