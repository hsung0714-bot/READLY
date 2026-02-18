import { useState, useMemo } from 'react';
import { ScrollView, View, Pressable, Text } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { dummyReadingLogs } from '@/src/dummy-data';
import { styles } from './index.styles';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function calculateStreak(logs: typeof dummyReadingLogs): number {
  const logDates = new Set(logs.map((l) => l.date));
  let streak = 0;
  const today = new Date();

  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split('T')[0];
    if (logDates.has(key)) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

export default function HomeScreen() {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(1); // 0-indexed, 1 = February

  const tintColor = useThemeColor({}, 'tint');
  const cardBg = useThemeColor({ light: '#F2F2F7', dark: '#1C1C1E' }, 'background');
  const textColor = useThemeColor({}, 'text');

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const logMap = useMemo(() => {
    const map: Record<string, number> = {};
    for (const log of dummyReadingLogs) {
      map[log.date] = (map[log.date] || 0) + log.pagesRead;
    }
    return map;
  }, []);

  const maxPages = useMemo(() => {
    return Math.max(...Object.values(logMap), 1);
  }, [logMap]);

  const streak = useMemo(() => calculateStreak(dummyReadingLogs), []);

  const todayStr = new Date().toISOString().split('T')[0];
  const todayPages = logMap[todayStr] || 0;

  const monthLabel = `${year}년 ${month + 1}월`;

  const goToPrevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const goToNextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  const renderCalendar = () => {
    const cells: React.ReactNode[] = [];

    // Empty cells for offset
    for (let i = 0; i < firstDay; i++) {
      cells.push(<View key={`empty-${i}`} style={styles.dayCell} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const pages = logMap[dateStr] || 0;
      const intensity = pages > 0 ? 0.2 + (pages / maxPages) * 0.8 : 0;
      const isToday = dateStr === todayStr;

      cells.push(
        <View key={day} style={styles.dayCell}>
          <View
            style={[
              styles.dayInner,
              pages > 0 && {
                backgroundColor: `rgba(10, 126, 164, ${intensity})`,
              },
              isToday && [styles.todayRing, { borderColor: tintColor }],
            ]}>
            <Text
              style={[
                styles.dayText,
                { color: textColor },
                pages > 0 && intensity > 0.5 && { color: '#fff' },
              ]}>
              {day}
            </Text>
          </View>
        </View>,
      );
    }

    return cells;
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <ThemedText style={styles.monthTitle}>{monthLabel}</ThemedText>
          <View style={styles.navRow}>
            <Pressable onPress={goToPrevMonth}>
              <ThemedText style={styles.navButton}>{'‹'}</ThemedText>
            </Pressable>
            <Pressable onPress={goToNextMonth}>
              <ThemedText style={styles.navButton}>{'›'}</ThemedText>
            </Pressable>
          </View>
        </View>

        {/* Streak */}
        <View style={[styles.streakCard, { backgroundColor: cardBg }]}>
          <ThemedText style={[styles.streakNumber, { color: tintColor }]}>{streak}</ThemedText>
          <ThemedText style={styles.streakLabel}>일 연속 독서 중</ThemedText>
        </View>

        {/* Weekday headers */}
        <View style={styles.weekdayRow}>
          {WEEKDAYS.map((d) => (
            <View key={d} style={styles.weekdayCell}>
              <ThemedText style={styles.weekdayText}>{d}</ThemedText>
            </View>
          ))}
        </View>

        {/* Calendar grid */}
        <View style={styles.calendarGrid}>{renderCalendar()}</View>

        {/* Today summary */}
        <View style={[styles.todayCard, { backgroundColor: cardBg }]}>
          <ThemedText style={styles.todayTitle}>오늘의 독서</ThemedText>
          <ThemedText style={styles.todayPages}>
            {todayPages > 0 ? `${todayPages}페이지 읽었어요` : '아직 기록이 없어요'}
          </ThemedText>
        </View>

        {/* Character placeholder */}
        <View style={styles.characterSection}>
          <Text style={styles.characterEmoji}>📚</Text>
          <ThemedText style={styles.characterLabel}>독서 캐릭터 (준비 중)</ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
