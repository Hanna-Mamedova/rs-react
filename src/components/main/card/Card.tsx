import { Character } from 'models/card.model';

import './Card.css';

type CardProps = {
  key: number;
  card: Character;
};

function Card(props: CardProps) {
  return (
    <div className="book-card" data-testid="card">
      <div className="book">
        <img className="book__image" src={props.card.image} alt="Book Cover" />
        <h3 className="book__title">{props.card.name}</h3>
        <div>
          <p className="book__author">{props.card.status}</p>
          <p className="book__price">{props.card.species}</p>
        </div>
      </div>
      <div className="button button-bord">
        <a href="#">View more</a>
      </div>
    </div>
  );
}

export default Card;
