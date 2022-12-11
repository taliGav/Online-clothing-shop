import { useContext } from "react";
import { cartContext } from "./../../contexts/cart-context";
import "./checkout.styles.scss";
import CheckoutItem from "./../../components/checkout-item/CheckoutItem";
// import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase-utils";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(cartContext);

  //   const {
  //     cart,
  //     totalUniqueItems,
  //     cartSubtotal,
  //     cartTax,
  //     cartTotal,
  //     clearCart,
  //     removeItem,
  //     toggleAmount,
  //   } = useCartContext();
  //   const history = useHistory();

  //   const isEmpty = !cart.length;
  //   const isEmptyCart = isEmpty && totalUniqueItems === 0;

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     clearCart();
  //     history.push("/");
  //   };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  );
};

export default Checkout;
