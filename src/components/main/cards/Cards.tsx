import { Character } from 'models/card.model';
import Card from '../card/Card';

import './Cards.css';

type CardsProps = {
  results: Character[];
};

function Cards(props: CardsProps) {
  const cards = props.results.map((card: Character) => <Card key={card.id} card={card} />);
  return <div className="cards">{cards}</div>;
}

export default Cards;
