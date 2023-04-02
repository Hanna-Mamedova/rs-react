import { Book } from 'models/card.model';
import Card from '../card/Card';

import './Cards.css';

type CardsProps = {
  books: Book[];
};

function Cards(props: CardsProps) {
  const cards = props.books.map((book: Book) => <Card key={book.id} book={book} />);
  return <div className="cards">{cards}</div>;
}

export default Cards;
