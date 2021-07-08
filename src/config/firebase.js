import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFE5aN05vxBM1wUq_jpavdWcMuU04aZw8",
  authDomain: "facebook-clone-alpha.firebaseapp.com",
  projectId: "facebook-clone-alpha",
  storageBucket: "facebook-clone-alpha.appspot.com",
  messagingSenderId: "8080932813",
  appId: "1:8080932813:web:ec4f7df30187b65447ce84",
  measurementId: "G-MPQ5R4SSRK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const providerFb = new firebase.auth.FacebookAuthProvider()
const storage = firebase.storage();

export { auth, provider, providerFb, storage };
export default db;
