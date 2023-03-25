import { Book } from 'models/card.model';
import { Component, ReactNode } from 'react';
import Card from '../card/Card';

import './Cards.css';

type CardsState = {
  books: Book[];
};

class Cards extends Component<{ books: Book[] }, CardsState> {
  state = {
    books: this.props.books,
  };

  render(): ReactNode {
    const cards = this.state.books.map((book: Book) => <Card key={book.id} book={book} />);

    return <div className="cards">{cards}</div>;
  }
}

export default Cards;
