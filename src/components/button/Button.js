import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButtonByType = (buttonType) => {
  switch (buttonType) {
    case BUTTON_TYPE_CLASSES.google:
      return GoogleSignInButton;
    case BUTTON_TYPE_CLASSES.inverted:
      return InvertedButton;
    default:
      return BaseButton;
  }
};

// const getButtonByType = (buttonType = BUTTON_TYPE_CLASSES.base) =>
//   ({
//     [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
//     [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
//     [BUTTON_TYPE_CLASSES.base]: BaseButton,
//   }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButtonByType(buttonType);
  return <CustomButton {...otherProps}> {children} </CustomButton>;
};

export default Button;
