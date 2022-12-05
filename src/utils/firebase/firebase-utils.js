import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  //   createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5mU6ZHDAMvnw4_j2zHdFZ-_dKUs1E9pA",
  authDomain: "online-clothing-shop-db-2022.firebaseapp.com",
  projectId: "online-clothing-shop-db-2022",
  storageBucket: "online-clothing-shop-db-2022.appspot.com",
  messagingSenderId: "499911884412",
  appId: "1:499911884412:web:d4b7b46a62e549741c13f9",
  measurementId: "G-1QDT6C9C8H",
};

const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);

export const signInWithGoogle = () => signInWithPopup(auth, provider);

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("User is signed in: ", user);
  } else {
    console.log("User is signed out");
  }
});

export const db = getFirestore(firebaseApp);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("userDocRef: ", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log("userSnapshot: ", userSnapshot);
  console.log("userSnapshot exists: ", userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user: ", error.message);
    }
  }

  return userDocRef;
};
