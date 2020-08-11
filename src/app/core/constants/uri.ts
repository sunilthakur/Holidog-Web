import { environment } from '../../../environments/environment';
let BASE_URL = environment.serverUrl;
export const URI = {
    getbooks: BASE_URL + `Books/GetBooks`,
    saveBook: BASE_URL + `Books/SaveBook`,
    getBookById: BASE_URL + `Books/GetBookDetails`,
    updateBookDetails: BASE_URL + `Books/UpdateBookDetails`,
    deleteBook: BASE_URL + `Books/DeleteBook`,

    getAuthors: BASE_URL + `Author/GetAuthors`,
    saveAuthor: BASE_URL + `Author/SaveAuthor`,
    getAuthorById: BASE_URL + `Author/GetAuthorDetails`,
    updateAuthorDetails: BASE_URL + `Author/UpdateAuthorDetails`,
    deleteAuthor: BASE_URL + `Author/DeleteAuthor`
}