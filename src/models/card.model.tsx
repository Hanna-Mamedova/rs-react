export interface Book {
  id: number;
  price: number;
  title: string;
  author: string;
  cover_url: string;
  genre: string;
  language: string;
  created_date: string;
}

export interface NewBook {
  title: string;
  author: string;
  price: string;
  date: string;
  lang: string;
  genre: string[];
  onStock: string;
  image: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Page {
  info: Info;
  results: Character[];
}
