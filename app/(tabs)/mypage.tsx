import { ScrollView, View, Pressable, Text } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useAuth } from '@/hooks/use-auth';
import { dummyBooks, dummyReports, dummyTranscriptions } from '@/src/dummy-data';
import { styles } from './mypage.styles';

export default function MyPageScreen() {
  const { user, signOut } = useAuth();
  const tintColor = useThemeColor({}, 'tint');
  const cardBg = useThemeColor({ light: '#F2F2F7', dark: '#1C1C1E' }, 'background');

  const readCount = dummyBooks.filter((b) => b.status === 'read').length;
  const readingCount = dummyBooks.filter((b) => b.status === 'reading').length;
  const reportCount = dummyReports.length;
  const transcriptionCount = dummyTranscriptions.length;

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ThemedText style={styles.title}>마이</ThemedText>

        {/* Profile */}
        <View style={[styles.profileCard, { backgroundColor: cardBg }]}>
          <Text style={styles.avatar}>👤</Text>
          <ThemedText style={styles.email}>{user?.email ?? '로그인 필요'}</ThemedText>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: cardBg }]}>
            <ThemedText style={[styles.statNumber, { color: tintColor }]}>{readCount}</ThemedText>
            <ThemedText style={styles.statLabel}>읽은 책</ThemedText>
          </View>
          <View style={[styles.statCard, { backgroundColor: cardBg }]}>
            <ThemedText style={[styles.statNumber, { color: tintColor }]}>
              {readingCount}
            </ThemedText>
            <ThemedText style={styles.statLabel}>읽고 있는 책</ThemedText>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: cardBg }]}>
            <ThemedText style={[styles.statNumber, { color: tintColor }]}>
              {reportCount}
            </ThemedText>
            <ThemedText style={styles.statLabel}>독후감</ThemedText>
          </View>
          <View style={[styles.statCard, { backgroundColor: cardBg }]}>
            <ThemedText style={[styles.statNumber, { color: tintColor }]}>
              {transcriptionCount}
            </ThemedText>
            <ThemedText style={styles.statLabel}>필사</ThemedText>
          </View>
        </View>

        {/* Menu */}
        <ThemedText style={styles.sectionTitle}>설정</ThemedText>

        <Pressable style={[styles.menuItem, { backgroundColor: cardBg }]}>
          <ThemedText style={styles.menuText}>알림 설정</ThemedText>
          <ThemedText style={styles.menuArrow}>›</ThemedText>
        </Pressable>

        <Pressable style={[styles.menuItem, { backgroundColor: cardBg }]}>
          <ThemedText style={styles.menuText}>독서 목표 설정</ThemedText>
          <ThemedText style={styles.menuArrow}>›</ThemedText>
        </Pressable>

        <Pressable style={[styles.menuItem, { backgroundColor: cardBg }]}>
          <ThemedText style={styles.menuText}>앱 정보</ThemedText>
          <ThemedText style={styles.menuArrow}>›</ThemedText>
        </Pressable>

        {/* Sign Out */}
        <Pressable
          style={[styles.signOutButton, { borderColor: '#FF3B30' }]}
          onPress={signOut}>
          <Text style={[styles.signOutText, { color: '#FF3B30' }]}>로그아웃</Text>
        </Pressable>
      </ScrollView>
    </ThemedView>
  );
}
