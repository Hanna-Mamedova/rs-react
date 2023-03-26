import { Component, ReactNode } from 'react';

import { NewBook } from 'models/card.model';
import Book from './new-book/NewBook';

import './NewBooksContainer.css';

class NewBooksContainer extends Component<{ newBooks: NewBook[] }> {
  render(): ReactNode {
    const newBooks = this.props.newBooks.map((book: NewBook, ind: number) => (
      <Book key={ind} book={book} />
    ));
    return <div className="newBooks">{newBooks}</div>;
  }
}

export default NewBooksContainer;
