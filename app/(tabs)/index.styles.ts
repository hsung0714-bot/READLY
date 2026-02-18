import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  monthTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navRow: {
    flexDirection: 'row',
    gap: 16,
  },
  navButton: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 8,
  },
  streakCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
  },
  streakNumber: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  streakLabel: {
    fontSize: 14,
    marginTop: 4,
  },
  weekdayRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekdayCell: {
    flex: 1,
    alignItems: 'center',
  },
  weekdayText: {
    fontSize: 12,
    fontWeight: '600',
    opacity: 0.6,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  dayInner: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 14,
    fontWeight: '500',
  },
  todayRing: {
    borderWidth: 2,
  },
  characterSection: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 24,
  },
  characterEmoji: {
    fontSize: 64,
  },
  characterLabel: {
    marginTop: 8,
    fontSize: 14,
    opacity: 0.6,
  },
  todayCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  todayTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  todayPages: {
    fontSize: 14,
    opacity: 0.7,
  },
});
