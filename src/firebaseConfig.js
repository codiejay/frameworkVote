import firebase from 'firebase/app';
import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBmzuiCPGdvKkwwrsyHCq3J3mFjSm1VeMs',
//   authDomain: 'frameworktest-4759b.firebaseapp.com',
//   databaseURL: 'https://frameworktest-4759b.firebaseio.com',
//   projectId: 'frameworktest-4759b',
//   storageBucket: 'frameworktest-4759b.appspot.com',
//   messagingSenderId: '453912383853',
//   appId: '1:453912383853:web:0d9598cfbc27de7f'
// };
const firebaseConfig = {
  apiKey: 'AIzaSyDJLjU8GK6RbaZ7ISa9qk08JQRtCPp8L7M',
  authDomain: 'frameworkvoting.firebaseapp.com',
  databaseURL: 'https://frameworkvoting.firebaseio.com',
  projectId: 'frameworkvoting',
  storageBucket: 'frameworkvoting.appspot.com',
  messagingSenderId: '602552600472',
  appId: '1:602552600472:web:814b80827372362a'
};

const app = firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore(app);
