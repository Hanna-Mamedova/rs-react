import { NewBook } from 'models/card.model';
import Book from './new-book/NewBook';

import './NewBooksContainer.css';

function NewBooksContainer(props: { newBooks: NewBook[] }) {
  const newBooks = props.newBooks.map((book: NewBook, ind: number) => (
    <Book key={ind} book={book} />
  ));
  return <div className="newBooks">{newBooks}</div>;
}

export default NewBooksContainer;
