import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from '../constants/uri'

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  public getAuthorPagedList(model: any): any {
    return this.http.post<any>(URI.getAuthors, model);
  }

  public saveAuthorDetails(model: any): any {
    return this.http.post<any>(URI.saveAuthor, model);
  }

  public getAuthorById(id: number): any {
    return this.http.get<any>(URI.getAuthorById + "?authorId=" + id);
  }

  public updateAuthorDetails(model: any): any {
    return this.http.put<any>(URI.updateAuthorDetails, model);
  }

  public removeAuthor(id: number): any {
    return this.http.delete<any>(URI.deleteAuthor + "?authorId=" + id)
  }
}
