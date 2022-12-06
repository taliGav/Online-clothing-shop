import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserProfileDocument,
} from "./../../utils/firebase/firebase-utils";
import SignUpFormInput from "./../sign-up-form/SignUpFormInput";
import Button from "./../button/Button";
import "./sign-in-form.styles.scss";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { email, password } = formValues;

  const resetForm = () => {
    setFormValues(defaultFormValues);
  };

  console.log("formValues: ", formValues);

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    await createUserProfileDocument(response.user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      resetForm();
    } catch (error) {
      console.log("Error creating user: ", error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log("formValues on handlechange: ", formValues);
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <h2>Already have an account? </h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <SignUpFormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <SignUpFormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>
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
