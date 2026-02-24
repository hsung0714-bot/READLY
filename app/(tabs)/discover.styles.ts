import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 28,
    marginBottom: 14,
  },
  pickCard: {
    width: 220,
    borderRadius: 14,
    padding: 16,
    marginRight: 12,
  },
  pickCoverPlaceholder: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  pickEmoji: {
    fontSize: 36,
  },
  pickTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  pickAuthor: {
    fontSize: 13,
    opacity: 0.6,
    marginBottom: 6,
  },
  pickDescription: {
    fontSize: 12,
    opacity: 0.5,
    lineHeight: 18,
  },
  bookCard: {
    width: 140,
    borderRadius: 12,
    padding: 12,
    marginRight: 10,
  },
  coverPlaceholder: {
    width: '100%',
    height: 90,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  coverEmoji: {
    fontSize: 28,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  bookAuthor: {
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 4,
  },
  bookPages: {
    fontSize: 11,
    opacity: 0.4,
  },
});
