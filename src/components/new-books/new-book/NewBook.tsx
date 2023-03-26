import { NewBook } from 'models/card.model';
import { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import './NewBook.css';

type BookProps = {
  key: number;
  book: NewBook;
};

class Book extends Component<BookProps> {
  render(): ReactNode {
    return (
      <div className="book-card">
        <div className="book">
          <img className="book__image" src={this.props.book.cover_url} alt="" />
          <h3 className="book__title">{this.props.book.title}</h3>
          <div>
            <p className="book__author">
              <span className="book__label">Author: </span>
              {this.props.book.author}
            </p>
            <p className="book__date">
              <span className="book__label">Date: </span>
              {this.props.book.date}
            </p>
            <p className="book__lang">
              <span className="book__label">Lang: </span>
              {this.props.book.language}
            </p>
            <p className="book__stock">
              <span className="book__label">On Stock: </span>
              {this.props.book.onStock ? 'yes' : 'no'}
            </p>
            <p className="book__genre">
              <span className="book__label">Genre: </span>
              {`${this.props.book.genre.join(', ')}`}
            </p>
            <p className="book__price">
              {this.props.book.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
