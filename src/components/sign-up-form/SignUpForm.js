import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserProfileDocument,
} from "./../../utils/firebase/firebase-utils";

import SignUpFormInput from "./SignUpFormInput";
import Button from "./../button/Button";

import "./form-input.styles.scss";

const defaultFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { displayName, email, password, confirmPassword } = formValues;

  console.log("formValues: ", formValues);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const res = await createAuthUserWithEmailAndPassword(email, password);
      console.log("res: ", res);
      await createUserProfileDocument(res.user, { displayName });
      setFormValues(defaultFormValues);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use.");
      }
      if (error.code === "auth/invalid-email") {
        alert("Cannot create user, invalid email.");
      }
      console.log("Error creating user: ", error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
    console.log("formValues on handlechange: ", formValues);
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account yet? </h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <SignUpFormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
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
        <SignUpFormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;

{
  /* <SignUpFormContainer>
    <SignUpFormTitle>Sign Up</SignUpFormTitle> */
}
{
  /* </SignUpFormContainer> */
}
