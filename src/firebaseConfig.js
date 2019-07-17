import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBmzuiCPGdvKkwwrsyHCq3J3mFjSm1VeMs',
  authDomain: 'frameworktest-4759b.firebaseapp.com',
  databaseURL: 'https://frameworktest-4759b.firebaseio.com',
  projectId: 'frameworktest-4759b',
  storageBucket: 'frameworktest-4759b.appspot.com',
  messagingSenderId: '453912383853',
  appId: '1:453912383853:web:0d9598cfbc27de7f'
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
