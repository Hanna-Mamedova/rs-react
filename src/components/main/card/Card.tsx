import { Character } from 'models/card.model';

import './Card.css';

type CardProps = {
  key: number;
  card: Character;
  onClick: (id: number) => void;
};

function Card({ card, onClick }: CardProps) {
  const handleClick = () => {
    onClick(card.id);
  };

  return (
    <div className="book-card" data-testid="card">
      <div className="book">
        <img className="book__image" src={card.image} alt="Book Cover" />
        <h3 className="book__title">{card.name}</h3>
        <div>
          <p className="book__author">{card.status}</p>
          <p className="book__price">{card.species}</p>
        </div>
      </div>
      <div className="button button-bord">
        <button onClick={handleClick}>View more</button>
      </div>
    </div>
  );
}

export default Card;
