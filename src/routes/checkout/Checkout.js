import { useContext } from "react";
import { CartContext } from "./../../contexts/cart-context";

import CheckoutItem from "./../../components/checkout-item/CheckoutItem";

import {CheckoutContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer} from "./checkout.styles";


const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalContainer>
        <span>TOTAL: ${totalPrice}</span>
      </TotalContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
