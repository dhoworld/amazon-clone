import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZp2fW4641YFSnlzj-rE79NTCdexe0TeQ",
  authDomain: "clone-c6c72.firebaseapp.com",
  databaseURL: "https://clone-c6c72.firebaseio.com",
  projectId: "clone-c6c72",
  storageBucket: "clone-c6c72.appspot.com",
  messagingSenderId: "117555871089",
  appId: "1:117555871089:web:2bd53776c903e65a7a8ad0",
  measurementId: "G-TSFKZQVGHS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
