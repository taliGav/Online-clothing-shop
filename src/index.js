import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/user-context";
import { ProductsProvider } from "./contexts/products-context";
import { CartStatusProvider } from "./contexts/cart-context";

import "./index.scss";
import reportWebVitals from "./reportWebVitals";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartStatusProvider> 
          <App />
          </CartStatusProvider>
        </ProductsProvider>
      </UserProvider>
      {/* <RouterProvider router={router} /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
