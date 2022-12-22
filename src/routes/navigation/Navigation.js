import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

import { ReactComponent as CrwnLogo } from "./../../assets/crown.svg";

import { CartContext } from "./../../contexts/cart-context";
import { selectCurrentUser } from './../../store/user/user.selector';

import { signOutAuthUser } from "./../../utils/firebase/firebase-utils";
import CartIcon from "./../../components/cart-icon/CartIcon";
import CartDropdown from "./../../components/cart-dropdown/CartDropdown";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen, toggleIsCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          {currentUser ? (
            <NavLink as="span" to="/" onClick={signOutAuthUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon onClick={toggleIsCartOpen} />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
