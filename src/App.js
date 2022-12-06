import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Shop from "./routes/shop/Shop";
import Authentication from "./routes/authentication/Authentication";
import Home from "./routes/Home";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
