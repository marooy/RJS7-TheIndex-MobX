import { observable, computed, decorate } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class BookStore {
  books = [];
  loading = true;
  query = "";

  fetchAllBooks = async () => {
    try {
      const res = await instance.get("/api/books/");
      const books = res.data;
      this.books = books;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  filterBooksByColor = color => {
    return this.books.filter(book => book.color === color);
  };

  get filteredBooks() {
    return this.books.filter(book =>
      book.title.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  getBookById = id => {
    return this.books.find(book => +book.id === +id);
  };
}

decorate(BookStore, {
  books: observable,
  loading: observable,
  query: observable,
  filteredBooks: computed
});
const bookStore = new BookStore();
bookStore.fetchAllBooks();
export default bookStore;
