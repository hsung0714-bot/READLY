import { initializeApp } from 'firebase/app';
// @ts-ignore -- getReactNativePersistence is exported from the RN bundle but not from the default TS types
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAj7acAlG7DDJa60RAkPfGx0_zO2Q55aSs",
  authDomain: "readly-ff87c.firebaseapp.com",
  projectId: "readly-ff87c",
  storageBucket: "readly-ff87c.firebasestorage.app",
  messagingSenderId: "911494512290",
  appId: "1:911494512290:web:2385fc23e76efbcdbe61fb",
  measurementId: "G-F8QT65TSJ2"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
