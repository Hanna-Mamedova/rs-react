import { NewBook } from 'models/card.model';
import React, { Component } from 'react';

import AddBookFormContainer from '../../components/add-book-form/AddBookFormContainer';
import NewBooksContainer from '../../components/new-books/NewBooksContainer';

import './Forms.css';

interface FormsState {
  newBooks: NewBook[];
}

class Forms extends Component {
  state: FormsState = {
    newBooks: [],
  };

  addBook(book: NewBook) {
    this.setState({
      newBooks: [...this.state.newBooks, book],
    });
  }

  render(): React.ReactNode {
    return (
      <div className="forms">
        <h1>Add book</h1>
        <AddBookFormContainer onFormSubmit={(book: NewBook) => this.addBook(book)} />
        <NewBooksContainer newBooks={this.state.newBooks} />
      </div>
    );
  }
}

export default Forms;
