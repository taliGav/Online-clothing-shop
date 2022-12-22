import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("User is signed in: ", user);
  } else {
    console.log("User is signed out");
  }
});

export const db = getFirestore(firebaseApp);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field = "title"
) => {
  const collectionRef = collection(db, collectionKey);
  // console.log("collectionRef: ", collectionRef);
  const batch = writeBatch(db);
  // console.log("batch: ", batch);
  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef, obj[field].toLowerCase());
    // console.log("newDocRef: ", newDocRef);
    batch.set(newDocRef, obj);
  });

  await batch.commit();
  console.log("batch committed");
};

export const getCategoriesAndDocuments = async () => {
  // export const getCategoriesAndDocuments = async (collectionKey) => {
  // const collectionRef = collection(db, collectionKey);
  const collectionRef = collection(db, "categories");
  // console.log("collectionRef: ", collectionRef);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  // console.log("querySnapshot: ", querySnapshot);
  
  const categories = querySnapshot.docs.map((docSnapshot)=> docSnapshot.data())
  return categories
};

export const createUserProfileDocument = async (authUser, additionalData) => {
  if (!authUser) return;
  const userDocRef = doc(db, "users", authUser.uid);

  // console.log("userDocRef: ", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log("userSnapshot: ", userSnapshot);
  // console.log("userSnapshot exists: ", userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = authUser;
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

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const authUser = await createUserWithEmailAndPassword(auth, email, password);
  // console.log("authUser: ", authUser);
  // createUserProfileDocument(authUser.user, { displayName });
  return authUser;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const authUser = await signInWithEmailAndPassword(auth, email, password);
  // console.log("sign in authUser: ", authUser);
  return authUser;
};

export const signOutAuthUser = () => {
  auth.signOut();
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
