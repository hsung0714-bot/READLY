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
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardBookTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardDate: {
    fontSize: 12,
    opacity: 0.5,
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
  },
  cardPage: {
    fontSize: 12,
    opacity: 0.5,
    marginTop: 8,
    textAlign: 'right',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    opacity: 0.5,
    fontSize: 16,
  },
});
