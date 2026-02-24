import {
  ReadBook,
  ReadingBook,
  WishBook,
  UserBook,
  BookReport,
  Transcription,
  ReadingLog,
  RecommendedBook,
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

// --- 추천 책 (도서관 탭용) ---
export interface RecommendedCategory {
  key: string;
  title: string;
  books: RecommendedBook[];
}

export const todayPicks: RecommendedBook[] = [
  {
    id: 'rec1',
    title: '어린 왕자',
    author: '생텍쥐페리',
    coverColor: '#5B8DEF',
    genre: '고전',
    description: '사막에 불시착한 비행사와 어린 왕자의 만남을 통해 사랑과 우정의 의미를 되새기는 이야기.',
    totalPages: 120,
  },
  {
    id: 'rec2',
    title: '미드나잇 라이브러리',
    author: '매트 헤이그',
    coverColor: '#7B68EE',
    description: '삶과 죽음 사이에 있는 도서관에서 다른 삶을 경험하는 한 여성의 이야기.',
    genre: '소설',
    totalPages: 304,
  },
  {
    id: 'rec3',
    title: '달러구트 꿈 백화점',
    author: '이미예',
    coverColor: '#FF8C94',
    description: '잠들면 찾아가는 꿈 백화점에서 벌어지는 판타지 이야기.',
    genre: '판타지',
    totalPages: 292,
  },
];

export const recommendedCategories: RecommendedCategory[] = [
  {
    key: 'beginner',
    title: '처음 읽기 좋은 책',
    books: [
      {
        id: 'beg1',
        title: '나는 나로 살기로 했다',
        author: '김수현',
        coverColor: '#FFB347',
        genre: '에세이',
        description: '지친 일상에서 나를 돌아보게 만드는 에세이.',
        totalPages: 240,
      },
      {
        id: 'beg2',
        title: '죽고 싶지만 떡볶이는 먹고 싶어',
        author: '백세희',
        coverColor: '#FF6B6B',
        genre: '에세이',
        description: '가벼운 우울을 안고 살아가는 일상의 기록.',
        totalPages: 210,
      },
      {
        id: 'beg3',
        title: '언어의 온도',
        author: '이기주',
        coverColor: '#48CFAD',
        genre: '에세이',
        description: '말과 글에 담긴 온기를 느낄 수 있는 에세이.',
        totalPages: 268,
      },
      {
        id: 'beg4',
        title: '보노보노처럼 살다니 다행이야',
        author: '이가라시 미키오',
        coverColor: '#A0D2DB',
        genre: '에세이',
        description: '보노보노의 느긋한 일상에서 배우는 인생 철학.',
        totalPages: 176,
      },
    ],
  },
  {
    key: 'short',
    title: '2시간이면 끝나는 책',
    books: [
      {
        id: 'sht1',
        title: '어린 왕자',
        author: '생텍쥐페리',
        coverColor: '#5B8DEF',
        genre: '고전',
        description: '전 세계인이 사랑하는 영원한 명작.',
        totalPages: 120,
      },
      {
        id: 'sht2',
        title: '동물농장',
        author: '조지 오웰',
        coverColor: '#6C5B7B',
        genre: '고전',
        description: '풍자로 가득한 짧지만 강렬한 우화.',
        totalPages: 144,
      },
      {
        id: 'sht3',
        title: '변신',
        author: '프란츠 카프카',
        coverColor: '#355C7D',
        genre: '문학',
        description: '어느 날 벌레가 된 남자의 초현실적 이야기.',
        totalPages: 96,
      },
      {
        id: 'sht4',
        title: '노인과 바다',
        author: '어니스트 헤밍웨이',
        coverColor: '#2A9D8F',
        genre: '문학',
        description: '바다 위에서 펼쳐지는 노인의 위대한 사투.',
        totalPages: 128,
      },
    ],
  },
  {
    key: 'essay',
    title: '에세이 추천',
    books: [
      {
        id: 'ess1',
        title: '나의 하루는 4시 30분에 시작된다',
        author: '김유진',
        coverColor: '#F4A261',
        genre: '에세이',
        description: '새벽형 인간의 하루와 성장 기록.',
        totalPages: 256,
      },
      {
        id: 'ess2',
        title: '여행의 이유',
        author: '김영하',
        coverColor: '#E76F51',
        genre: '에세이',
        description: '왜 우리는 여행을 떠나는가에 대한 이야기.',
        totalPages: 204,
      },
      {
        id: 'ess3',
        title: '걷는 사람, 하정우',
        author: '하정우',
        coverColor: '#264653',
        genre: '에세이',
        description: '배우 하정우가 걸으며 풀어내는 삶의 이야기.',
        totalPages: 288,
      },
      {
        id: 'ess4',
        title: '서른의 반격',
        author: '손미나',
        coverColor: '#E9C46A',
        genre: '에세이',
        description: '서른 즈음의 고민과 도전을 담은 에세이.',
        totalPages: 232,
      },
    ],
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
