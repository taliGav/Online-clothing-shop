import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserProfileDocument,
} from "./../../utils/firebase/firebase-utils";

import AuthFormInput from "./../form-input/FormInput";
import Button from "./../button/Button";

import {SignUpContainer, SignUpTitle} from "./sign-up-form.styles";



const defaultFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { displayName, email, password, confirmPassword } = formValues;

  const resetForm = () => {
    setFormValues(defaultFormValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const res = await createAuthUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(res.user, { displayName });
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Cannot create user, email already in use.");
          break;
        case "auth/invalid-email":
          alert("Cannot create user, invalid email.");
          break;
        default:
          console.log("Error creating user: ", error.message);
          alert("Error signing up. Please try again.");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };


  return (
    <SignUpContainer>
      <SignUpTitle>Don't have an account yet? </SignUpTitle>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <AuthFormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
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
        <AuthFormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;