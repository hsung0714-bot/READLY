import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
} from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAuth } from '@/hooks/use-auth';
import { useThemeColor } from '@/hooks/use-theme-color';
import { styles } from './login.styles';

export default function LoginScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      await signIn(email, password);
    } catch (error: any) {
      Alert.alert('Sign In Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}
      >
        <ThemedText type="title" style={styles.title}>
          READLY
        </ThemedText>

        <TextInput
          style={[styles.input, { color: textColor, borderColor: textColor }]}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={[styles.input, { color: textColor, borderColor: textColor }]}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          style={[styles.button, { backgroundColor: tintColor }]}
          onPress={handleSignIn}
          disabled={loading}
        >
          <ThemedText style={styles.buttonText}>
            {loading ? 'Signing In...' : 'Sign In'}
          </ThemedText>
        </Pressable>

        <Link href="/(auth)/signup" asChild>
          <Pressable style={styles.link}>
            <ThemedText type="link">
              Don't have an account? Sign Up
            </ThemedText>
          </Pressable>
        </Link>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}
