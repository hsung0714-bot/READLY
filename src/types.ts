export interface Book {
  id: string;
  title: string;
  author: string;
  coverColor: string; // placeholder color for cover
  totalPages: number;
  genre: string;
}

export interface ReadBook extends Book {
  status: 'read';
  rating: number; // 1-5
  finishedDate: string; // ISO date
}

export interface ReadingBook extends Book {
  status: 'reading';
  currentPage: number;
  startedDate: string; // ISO date
}

export interface WishBook extends Book {
  status: 'wish';
  addedDate: string; // ISO date
}

export type UserBook = ReadBook | ReadingBook | WishBook;

export interface BookReport {
  id: string;
  bookId: string;
  bookTitle: string;
  content: string;
  createdAt: string; // ISO date
}

export interface Transcription {
  id: string;
  bookId: string;
  bookTitle: string;
  passage: string;
  page: number;
  createdAt: string; // ISO date
}

export interface ReadingLog {
  date: string; // YYYY-MM-DD
  pagesRead: number;
  bookId: string;
}
