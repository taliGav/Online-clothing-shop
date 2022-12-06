import SignInForm from "../../components/sign-in-form/SignInForm";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

const Authentication = () => {

  return (
    <div className="sign-in-container">
    {/* <div className="auth-container"> */}
      <SignInForm />

      <SignUpForm />
    </div>
  );
};

export default Authentication;
