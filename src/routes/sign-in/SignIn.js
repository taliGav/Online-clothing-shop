import {
  signInWithGooglePopup,
  createUserProfileDocument
} from "./../../utils/firebase/firebase-utils";

const SignIn = () => {


  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserProfileDocument(response.user);
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In With Google popup</button>
    </div>
  );
};

export default SignIn;
