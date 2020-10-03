import * as firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAu6y_uydEIfztzStqdl7FD8R0mSEtMRLQ",
  authDomain: "e-commerce-18e2b.firebaseapp.com",
  databaseURL: "https://e-commerce-18e2b.firebaseio.com",
  projectId: "e-commerce-18e2b",
  storageBucket: "e-commerce-18e2b.appspot.com",
  messagingSenderId: "833250518801",
  appId: "1:833250518801:web:cb7c6bb5b922999a36ceb0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();