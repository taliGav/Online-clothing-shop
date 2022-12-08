import { useState,
  //  useContext 
  } from "react";
import { useNavigate } from "react-router-dom";
import AuthFormInput from "./../form-input/FormInput";
import Button from "./../button/Button";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "./../../utils/firebase/firebase-utils";
// import { userContext } from "./../../contexts/user-context";

import "./sign-in-form.styles.scss";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();
  // const { currentUser } = useContext(userContext);
  const [formValues, setFormValues] = useState(defaultFormValues);

  const { email, password } = formValues;

  // console.log("navigate", navigate);

  const resetForm = () => {
    setFormValues(defaultFormValues);
  };

  const signInWithGoogle = async () => await signInWithGooglePopup();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetForm();
      navigate("/dashboard");
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
