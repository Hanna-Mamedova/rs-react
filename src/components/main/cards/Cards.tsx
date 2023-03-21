import { Book } from 'models/card.model';
import { Component, ReactNode } from 'react';
import Card from '../card/Card';
import { books } from './cards-data';

import './cards.css';

type CardsProps = Record<string, never>;
type CardsState = {
  books: Book[];
};

class Cards extends Component<CardsProps, CardsState> {
  constructor(props: CardsProps) {
    super(props);

    this.state = {
      books: books,
    };
  }

  render(): ReactNode {
    const cards = this.state.books.map((book) => <Card key={book.id} book={book} />);

    return <div className="cards">{cards}</div>;
  }
}

export default Cards;
