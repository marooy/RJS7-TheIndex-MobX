import React, { Component } from "react";
import { observer } from "mobx-react";

import BookRow from "./BookRow";

class BookTable extends Component {
  render() {
    const bookRows = this.props.books.map(book => (
      <BookRow key={book.id} book={book} />
    ));
    return (
      <table className="mt-3 table">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{bookRows}</tbody>
      </table>
    );
  }
}

export default observer(BookTable);
