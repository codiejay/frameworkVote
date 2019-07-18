import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDJLjU8GK6RbaZ7ISa9qk08JQRtCPp8L7M',
  authDomain: 'frameworkvoting.firebaseapp.com',
  databaseURL: 'https://frameworkvoting.firebaseio.com',
  projectId: 'frameworkvoting',
  storageBucket: 'frameworkvoting.appspot.com',
  messagingSenderId: '602552600472',
  appId: '1:602552600472:web:814b80827372362a'
};

var app = firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore(app);
