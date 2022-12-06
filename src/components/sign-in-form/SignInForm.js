import { useState, useContext } from "react";
import AuthFormInput from "./../form-input/FormInput";
import Button from "./../button/Button";
import { userContext } from "./../../contexts/user-context";

import {
  signInWithGooglePopup,
  createUserProfileDocument,
  signInAuthUserWithEmailAndPassword,
} from "./../../utils/firebase/firebase-utils";

import "./sign-in-form.styles.scss";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { email, password } = formValues;

  const { setCurrentUser } = useContext(userContext);

  const resetForm = () => {
    setFormValues(defaultFormValues);
  };

  // console.log("signInFormValues: ", formValues);

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    setCurrentUser(response.user);
    await createUserProfileDocument(response.user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(response.user);
      // console.log("sign in submit response: ", response);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        case "auth/wrong-password":
          alert("Incorrect password. Please try again.");
          break;
        default:
          console.log("Error creating user: ", error.message);
          alert("Error signing in. Please try again.");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log("formValues on handlechange: ", formValues);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account? </h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <AuthFormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <AuthFormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

{
  /* <SignUpFormContainer>
    <SignUpFormTitle>Sign Up</SignUpFormTitle> */
}
{
  /* </SignUpFormContainer> */
}
