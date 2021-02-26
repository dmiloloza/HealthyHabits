import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

import {firebaseConfig} from '../../env-config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase products
const analytics = firebase.analytics();
const firestore = firebase.firestore();

export {analytics, firestore};
