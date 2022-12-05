import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserProfileDocument,
} from "./../../utils/firebase/firebase-utils";

const SignIn = () => {

    useEffect(() => {
        async function signInWithGoogle() {
            const result = await getRedirectResult(auth);
            if (result.user) {
                const userDocRef = await createUserProfileDocument(result.user);
            }
        }
        signInWithGoogle();
    },[])

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserProfileDocument(response.user);
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In With Google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In With Google redirect
      </button>
    </div>
  );
};

export default SignIn;
