import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchBar: {
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  segmentRow: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 8,
  },
  segmentButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  segmentText: {
    fontSize: 14,
    fontWeight: '500',
  },
  bookCard: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  coverPlaceholder: {
    width: 60,
    height: 84,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverEmoji: {
    fontSize: 24,
  },
  bookInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    opacity: 0.6,
    marginBottom: 8,
  },
  bookMeta: {
    fontSize: 13,
    opacity: 0.5,
  },
  progressBarBg: {
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
  progressBarFill: {
    height: 6,
    borderRadius: 3,
  },
  ratingRow: {
    flexDirection: 'row',
    gap: 2,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    opacity: 0.5,
    fontSize: 16,
  },
});
