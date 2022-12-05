import { useState } from "react";

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

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormValues({ ...formValues, [name]: value });
        console.log("formValues on handlechange: ", formValues);
    };


  return (
    <div>
      <h1>Sign up with your email and password</h1>

      <form onSubmit={() => {handleChange()}}>
        <label>Display Name</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={(e) => {handleChange(e)}}
          required
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {handleChange(e)}}
          required
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {handleChange(e)}}
          required
        />
        <br />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {handleChange(e)}}
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      {/* <SignUpFormContainer>
         <SignUpFormTitle>Sign Up</SignUpFormTitle>
         <SignUpFormInput type="text" placeholder="Name" required />
         <SignUpFormInput type="email" placeholder="Email" required />
         <SignUpFormInput type="password" placeholder="Password" required />
         <SignUpFormInput type="password" placeholder="Confirm Password" required />
         <SignUpFormButton>Sign Up</SignUpFormButton>
      </SignUpFormContainer> */}
    </div>
  );
};

export default SignUpForm;
