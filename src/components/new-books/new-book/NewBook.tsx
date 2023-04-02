import { NewBook } from 'models/card.model';

import './NewBook.css';

type BookProps = {
  key: number;
  book: NewBook;
};

function Book(props: BookProps) {
  const genre = props.book.genre.join(', ');
  return (
    <div className="book-card">
      <div className="book">
        <img className="book__image" src={props.book.image} alt="Book Cover" />
        <h3 className="book__title">{props.book.title}</h3>
        <div>
          <p className="book__author">
            <span className="book__label">Author: </span>
            {props.book.author}
          </p>
          <p className="book__date">
            <span className="book__label">Date: </span>
            {props.book.date}
          </p>
          <p className="book__lang">
            <span className="book__label">Lang: </span>
            {props.book.lang}
          </p>
          <p className="book__stock">
            <span className="book__label">On Stock: </span>
            {props.book.onStock}
          </p>
          <p className="book__genre">
            <span className="book__label">Genre: </span>
            {genre}
          </p>
          <p className="book__price">
            {(+props.book.price).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Book;
