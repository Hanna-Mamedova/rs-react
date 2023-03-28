import { Book } from 'models/card.model';
import { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import './Card.css';

type CardProps = {
  key: number;
  book: Book;
};

type MyState = { book: Book };

class Card extends Component<CardProps, MyState> {
  render(): ReactNode {
    return (
      <div className="book-card">
        <div className="book">
          <img className="book__image" src={this.props.book.cover_url} alt="" />
          <h3 className="book__title">{this.props.book.title}</h3>
          <div>
            <p className="book__author">{this.props.book.author}</p>
            <p className="book__price">
              {this.props.book.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          </div>
        </div>
        <div className="button button-bord">
          <NavLink to="#">View more</NavLink>
        </div>
      </div>
    );
  }
}

export default Card;
