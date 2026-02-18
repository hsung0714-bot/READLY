import {
  ReadBook,
  ReadingBook,
  WishBook,
  UserBook,
  BookReport,
  Transcription,
  ReadingLog,
} from './types';

// --- 읽은 책 ---
const readBooks: ReadBook[] = [
  {
    id: 'b1',
    title: '아몬드',
    author: '손원평',
    coverColor: '#F4A261',
    totalPages: 264,
    genre: '소설',
    status: 'read',
    rating: 5,
    finishedDate: '2025-01-15',
  },
  {
    id: 'b2',
    title: '불편한 편의점',
    author: '김호연',
    coverColor: '#2A9D8F',
    totalPages: 268,
    genre: '소설',
    status: 'read',
    rating: 4,
    finishedDate: '2025-01-28',
  },
  {
    id: 'b3',
    title: '역행자',
    author: '자청',
    coverColor: '#264653',
    totalPages: 312,
    genre: '자기계발',
    status: 'read',
    rating: 4,
    finishedDate: '2025-02-05',
  },
];

// --- 읽고 있는 책 ---
const readingBooks: ReadingBook[] = [
  {
    id: 'b4',
    title: '데미안',
    author: '헤르만 헤세',
    coverColor: '#E76F51',
    totalPages: 200,
    genre: '문학',
    status: 'reading',
    currentPage: 87,
    startedDate: '2025-02-10',
  },
  {
    id: 'b5',
    title: '원씽',
    author: '게리 켈러',
    coverColor: '#E9C46A',
    totalPages: 280,
    genre: '자기계발',
    status: 'reading',
    currentPage: 142,
    startedDate: '2025-02-01',
  },
];

// --- 읽고 싶은 책 ---
const wishBooks: WishBook[] = [
  {
    id: 'b6',
    title: '나미야 잡화점의 기적',
    author: '히가시노 게이고',
    coverColor: '#457B9D',
    totalPages: 420,
    genre: '소설',
    status: 'wish',
    addedDate: '2025-02-12',
  },
];

export const dummyBooks: UserBook[] = [
  ...readBooks,
  ...readingBooks,
  ...wishBooks,
];

// --- 독후감 ---
export const dummyReports: BookReport[] = [
  {
    id: 'r1',
    bookId: 'b1',
    bookTitle: '아몬드',
    content:
      '감정을 느끼지 못하는 소년의 이야기가 깊은 인상을 남겼다. 공감 능력이란 무엇인지 다시 생각하게 만드는 책이었다. 특히 곤이와의 우정이 감동적이었다.',
    createdAt: '2025-01-16',
  },
  {
    id: 'r2',
    bookId: 'b2',
    bookTitle: '불편한 편의점',
    content:
      '따뜻한 이야기가 마음을 편하게 해주었다. 편의점이라는 작은 공간에서 펼쳐지는 다양한 인간 군상이 인상 깊었다.',
    createdAt: '2025-01-29',
  },
  {
    id: 'r3',
    bookId: 'b3',
    bookTitle: '역행자',
    content:
      '자기 혁명의 7단계에 대해 생각해볼 수 있었다. 특히 뇌 최적화와 유전자 오작동을 이해하는 부분이 흥미로웠다.',
    createdAt: '2025-02-06',
  },
];

// --- 필사 ---
export const dummyTranscriptions: Transcription[] = [
  {
    id: 't1',
    bookId: 'b1',
    bookTitle: '아몬드',
    passage:
      '괴물은 태어나는 게 아니라 만들어지는 거야. 누군가 괴물이라고 부르기 시작하면 정말 괴물이 되어버리는 거지.',
    page: 156,
    createdAt: '2025-01-14',
  },
  {
    id: 't2',
    bookId: 'b4',
    bookTitle: '데미안',
    passage:
      '새는 알에서 나오려고 투쟁한다. 알은 세계이다. 태어나려는 자는 하나의 세계를 파괴하지 않으면 안 된다.',
    page: 78,
    createdAt: '2025-02-11',
  },
];

// --- 독서 로그 (달력용) ---
export const dummyReadingLogs: ReadingLog[] = [
  { date: '2025-02-01', pagesRead: 30, bookId: 'b5' },
  { date: '2025-02-02', pagesRead: 25, bookId: 'b5' },
  { date: '2025-02-03', pagesRead: 45, bookId: 'b5' },
  { date: '2025-02-04', pagesRead: 20, bookId: 'b3' },
  { date: '2025-02-05', pagesRead: 35, bookId: 'b3' },
  { date: '2025-02-07', pagesRead: 15, bookId: 'b5' },
  { date: '2025-02-08', pagesRead: 40, bookId: 'b4' },
  { date: '2025-02-09', pagesRead: 22, bookId: 'b4' },
  { date: '2025-02-10', pagesRead: 50, bookId: 'b4' },
  { date: '2025-02-11', pagesRead: 28, bookId: 'b4' },
  { date: '2025-02-12', pagesRead: 33, bookId: 'b5' },
  { date: '2025-02-13', pagesRead: 18, bookId: 'b4' },
  { date: '2025-02-14', pagesRead: 42, bookId: 'b5' },
  { date: '2025-02-15', pagesRead: 30, bookId: 'b4' },
  { date: '2025-02-16', pagesRead: 25, bookId: 'b4' },
  { date: '2025-02-17', pagesRead: 35, bookId: 'b5' },
  { date: '2025-02-18', pagesRead: 20, bookId: 'b4' },
];
