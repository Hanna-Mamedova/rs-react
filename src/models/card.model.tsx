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
  price: number;
  date: string;
  language: string;
  genre: string[];
  onStock: boolean;
  cover_url: string;
}
