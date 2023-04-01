import { Book } from 'models/card.model';

import './Card.css';

type CardProps = {
  key: number;
  book: Book;
};

function Card(props: CardProps) {
  return (
    <div className="book-card">
      <div className="book">
        <img className="book__image" src={props.book.cover_url} alt="Book Cover" />
        <h3 className="book__title">{props.book.title}</h3>
        <div>
          <p className="book__author">{props.book.author}</p>
          <p className="book__price">
            {props.book.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
        </div>
      </div>
      <div className="button button-bord">
        <a href="#">View more</a>
      </div>
    </div>
  );
}

export default Card;
