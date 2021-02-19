import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

import { firebaseConfig } from '../../env-config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase products
const Analytics = firebase.analytics();
const Firestore = firebase.firestore();

export { Analytics, Firestore };
