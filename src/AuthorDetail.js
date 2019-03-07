import React, { Component } from "react";
import axios from "axios";
import { observer } from "mobx-react";

// Components
import BookTable from "./BookTable";
import Loading from "./Loading";

import authorStore from "./stores/authorStore";
import bookStore from "./stores/BookStore";

class AuthorDetail extends Component {
  render() {
    const authorID = this.props.match.params.authorID;
    const author = authorStore.getAuthorById(authorID);
    const authorName = `${author.first_name} ${author.last_name}`;
    const books = author.books.map(book => bookStore.getBookById(book));
    return (
      <div className="author">
        <div>
          <h3>{authorName}</h3>
          <img
            src={author.imageUrl}
            className="img-thumbnail img-fluid"
            alt={authorName}
          />
        </div>
        <BookTable books={books} />
      </div>
    );
  }
}

export default observer(AuthorDetail);
