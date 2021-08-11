import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA1abNvdZ4afPpWSdG9ZCJOiSovH6526WU",
  authDomain: "facebook-clone-1d030.firebaseapp.com",
  projectId: "facebook-clone-1d030",
  storageBucket: "facebook-clone-1d030.appspot.com",
  messagingSenderId: "328147038628",
  appId: "1:328147038628:web:17162aea389b6f51135131",
  measurementId: "G-BCTE24ZLTE"
};
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export{auth, provider};
export default db;
