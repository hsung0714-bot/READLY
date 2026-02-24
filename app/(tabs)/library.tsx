import { useState, useMemo } from 'react';
import { ScrollView, View, TextInput, Pressable, FlatList, Text } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { dummyBooks } from '@/src/dummy-data';
import { UserBook, ReadBook, ReadingBook } from '@/src/types';
import { styles } from './library.styles';

type Segment = 'read' | 'reading' | 'wish';

const SEGMENTS: { key: Segment; label: string }[] = [
  { key: 'read', label: '읽은 책' },
  { key: 'reading', label: '읽고 있는 책' },
  { key: 'wish', label: '읽고 싶은 책' },
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <View style={styles.ratingRow}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Text key={i} style={{ fontSize: 12 }}>
          {i <= rating ? '★' : '☆'}
        </Text>
      ))}
    </View>
  );
}

export default function LibraryScreen() {
  const [segment, setSegment] = useState<Segment>('read');
  const [search, setSearch] = useState('');

  const tintColor = useThemeColor({}, 'tint');
  const cardBg = useThemeColor({ light: '#F2F2F7', dark: '#1C1C1E' }, 'background');
  const textColor = useThemeColor({}, 'text');
  const inputBg = useThemeColor({ light: '#E5E5EA', dark: '#2C2C2E' }, 'background');

  const filteredBooks = useMemo(() => {
    return dummyBooks.filter((b) => {
      if (b.status !== segment) return false;
      if (search) {
        const q = search.toLowerCase();
        return b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
      }
      return true;
    });
  }, [segment, search]);

  const renderBookCard = (book: UserBook) => {
    return (
      <View key={book.id} style={[styles.bookCard, { backgroundColor: cardBg }]}>
        <View style={[styles.coverPlaceholder, { backgroundColor: book.coverColor }]}>
          <Text style={styles.coverEmoji}>📖</Text>
        </View>
        <View style={styles.bookInfo}>
          <ThemedText style={styles.bookTitle}>{book.title}</ThemedText>
          <ThemedText style={styles.bookAuthor}>{book.author}</ThemedText>

          {book.status === 'read' && (
            <>
              <RatingStars rating={(book as ReadBook).rating} />
              <ThemedText style={styles.bookMeta}>
                {(book as ReadBook).finishedDate} 완독
              </ThemedText>
            </>
          )}

          {book.status === 'reading' && (
            <>
              <ThemedText style={styles.bookMeta}>
                {(book as ReadingBook).currentPage} / {book.totalPages}p
              </ThemedText>
              <View style={[styles.progressBarBg, { backgroundColor: inputBg }]}>
                <View
                  style={[
                    styles.progressBarFill,
                    {
                      backgroundColor: tintColor,
                      width: `${((book as ReadingBook).currentPage / book.totalPages) * 100}%`,
                    },
                  ]}
                />
              </View>
            </>
          )}

          {book.status === 'wish' && (
            <ThemedText style={styles.bookMeta}>{book.genre}</ThemedText>
          )}
        </View>
      </View>
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ThemedText style={styles.title}>내 서재</ThemedText>

        <TextInput
          style={[styles.searchBar, { backgroundColor: inputBg, color: textColor }]}
          placeholder="책 제목이나 저자 검색"
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />

        <View style={styles.segmentRow}>
          {SEGMENTS.map((seg) => (
            <Pressable
              key={seg.key}
              style={[
                styles.segmentButton,
                {
                  borderColor: tintColor,
                  backgroundColor: segment === seg.key ? tintColor : 'transparent',
                },
              ]}
              onPress={() => setSegment(seg.key)}>
              <Text
                style={[
                  styles.segmentText,
                  { color: segment === seg.key ? '#fff' : tintColor },
                ]}>
                {seg.label}
              </Text>
            </Pressable>
          ))}
        </View>

        {filteredBooks.length === 0 ? (
          <ThemedText style={styles.emptyText}>책이 없습니다</ThemedText>
        ) : (
          filteredBooks.map(renderBookCard)
        )}
      </ScrollView>
    </ThemedView>
  );
}
