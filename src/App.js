import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";
import Home from "./routes/Home";

const Shop = () => {
    return (
        <h1>Shop</h1>
    );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
