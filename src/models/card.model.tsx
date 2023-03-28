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
  genre: string;
  onStock: string;
  image: string;
}
