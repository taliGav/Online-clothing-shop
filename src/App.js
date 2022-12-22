import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUserProfileDocument,
} from "./utils/firebase/firebase-utils";


import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/Home";
import Shop from "./routes/shop/Shop";
import Authentication from "./routes/authentication/Authentication";
import Dashboard from "./routes/dashboard/Dashboard";
import Checkout from "./routes/checkout/Checkout";

import {setCurrentUser} from './store/user/user.action'


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserProfileDocument(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="auth" element={<Authentication />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
