import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";
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
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
