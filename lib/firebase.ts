// lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC6Zp261KKWHR8hnLN3BDy1ofP0pk2ztY0',
  authDomain: 'flowlock-1fb7d.firebaseapp.com',
  projectId: 'flowlock-1fb7d',
  storageBucket: 'flowlock-1fb7d.firebasestorage.app',
  messagingSenderId: '953999809078',
  appId: '1:953999809078:web:961c01f3b8eda84c069697',
};
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
