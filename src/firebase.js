import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDjHv9hc4EJZWozh24_BX3Y2C6_H0c15hQ',
  authDomain: 'saturn-32b13.firebaseapp.com',
  databaseURL: 'https://saturn-32b13.firebaseio.com',
  projectId: 'saturn-32b13',
  storageBucket: 'saturn-32b13.appspot.com',
  messagingSenderId: '793988064932',
  appId: '1:793988064932:web:ce6e437d5879198eb32831',
  measurementId: 'G-3RE6KCEZEB',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebaseApp.firestore();

export { database, auth };
