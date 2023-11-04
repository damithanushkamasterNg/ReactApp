import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Home'
import Product from "./Product";

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />

      <Route path="/products" element={<Product />} />
    </Routes>
  </BrowserRouter>;
};

export default App;
