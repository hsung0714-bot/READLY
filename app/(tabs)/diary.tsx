import { useState } from 'react';
import { ScrollView, View, Pressable, Text } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { dummyReports, dummyTranscriptions } from '@/src/dummy-data';
import { styles } from './diary.styles';

type Segment = 'report' | 'transcription';

const SEGMENTS: { key: Segment; label: string }[] = [
  { key: 'report', label: '독후감' },
  { key: 'transcription', label: '필사' },
];

export default function DiaryScreen() {
  const [segment, setSegment] = useState<Segment>('report');

  const tintColor = useThemeColor({}, 'tint');
  const cardBg = useThemeColor({ light: '#F2F2F7', dark: '#1C1C1E' }, 'background');

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ThemedText style={styles.title}>독서 일기장</ThemedText>

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

        {segment === 'report' && (
          <>
            {dummyReports.length === 0 ? (
              <ThemedText style={styles.emptyText}>독후감이 없습니다</ThemedText>
            ) : (
              dummyReports.map((report) => (
                <View key={report.id} style={[styles.card, { backgroundColor: cardBg }]}>
                  <ThemedText style={styles.cardBookTitle}>{report.bookTitle}</ThemedText>
                  <ThemedText style={styles.cardDate}>{report.createdAt}</ThemedText>
                  <ThemedText style={styles.cardContent} numberOfLines={3}>
                    {report.content}
                  </ThemedText>
                </View>
              ))
            )}
          </>
        )}

        {segment === 'transcription' && (
          <>
            {dummyTranscriptions.length === 0 ? (
              <ThemedText style={styles.emptyText}>필사가 없습니다</ThemedText>
            ) : (
              dummyTranscriptions.map((trans) => (
                <View key={trans.id} style={[styles.card, { backgroundColor: cardBg }]}>
                  <ThemedText style={styles.cardBookTitle}>{trans.bookTitle}</ThemedText>
                  <ThemedText style={styles.cardDate}>{trans.createdAt}</ThemedText>
                  <ThemedText style={styles.cardContent} numberOfLines={4}>
                    "{trans.passage}"
                  </ThemedText>
                  <ThemedText style={styles.cardPage}>p.{trans.page}</ThemedText>
                </View>
              ))
            )}
          </>
        )}
      </ScrollView>
    </ThemedView>
  );
}
