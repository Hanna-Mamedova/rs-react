import { Character } from 'models/card.model';
import Card from '../card/Card';

import './Cards.css';

type CardsProps = {
  results: Character[];
  onClick: (id: number) => void;
};

function Cards({ results, onClick }: CardsProps) {
  const cards = results.map((card: Character) => (
    <Card key={card.id} card={card} onClick={onClick} />
  ));
  return <div className="cards">{cards}</div>;
}

export default Cards;
