import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "./../../assets/crown.svg";
import { userContext } from "./../../contexts/user-context";
import { cartContext } from "./../../contexts/cart-context";

import { signOutAuthUser } from "./../../utils/firebase/firebase-utils";
import CartIcon from "./../../components/cart-icon/CartIcon";
import CartDropdown from "./../../components/cart-dropdown/CartDropdown";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(userContext);
  const { isCartOpen , setIsCartOpen} = useContext(cartContext);
  
  const handleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <Fragment>
      <div className="navigation-bar">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutAuthUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon onClick={handleCartDropdown} />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
