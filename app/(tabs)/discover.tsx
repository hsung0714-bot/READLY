import { ScrollView, View, FlatList } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { todayPicks, recommendedCategories } from '@/src/dummy-data';
import { RecommendedBook } from '@/src/types';
import { styles } from './discover.styles';

function PickCard({ book, cardBg }: { book: RecommendedBook; cardBg: string }) {
  return (
    <View style={[styles.pickCard, { backgroundColor: cardBg }]}>
      <View style={[styles.pickCoverPlaceholder, { backgroundColor: book.coverColor }]}>
        <ThemedText style={styles.pickEmoji}>📖</ThemedText>
      </View>
      <ThemedText style={styles.pickTitle}>{book.title}</ThemedText>
      <ThemedText style={styles.pickAuthor}>{book.author}</ThemedText>
      <ThemedText style={styles.pickDescription} numberOfLines={2}>
        {book.description}
      </ThemedText>
    </View>
  );
}

function BookCard({ book, cardBg }: { book: RecommendedBook; cardBg: string }) {
  return (
    <View style={[styles.bookCard, { backgroundColor: cardBg }]}>
      <View style={[styles.coverPlaceholder, { backgroundColor: book.coverColor }]}>
        <ThemedText style={styles.coverEmoji}>📖</ThemedText>
      </View>
      <ThemedText style={styles.bookTitle} numberOfLines={1}>
        {book.title}
      </ThemedText>
      <ThemedText style={styles.bookAuthor} numberOfLines={1}>
        {book.author}
      </ThemedText>
      <ThemedText style={styles.bookPages}>{book.totalPages}p</ThemedText>
    </View>
  );
}

export default function DiscoverScreen() {
  const cardBg = useThemeColor({ light: '#F2F2F7', dark: '#1C1C1E' }, 'background');

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ThemedText style={styles.title}>도서관</ThemedText>

        {/* 오늘의 추천 */}
        <ThemedText style={styles.sectionTitle}>오늘의 추천</ThemedText>
        <FlatList
          data={todayPicks}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PickCard book={item} cardBg={cardBg} />}
          scrollEnabled
        />

        {/* 카테고리별 추천 */}
        {recommendedCategories.map((category) => (
          <View key={category.key}>
            <ThemedText style={styles.sectionTitle}>{category.title}</ThemedText>
            <FlatList
              data={category.books}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <BookCard book={item} cardBg={cardBg} />}
              scrollEnabled
            />
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
}
