import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { NewArrival } from "./pages/NewArrival";
import { CategoryPage } from "./pages/SpecificCategory";
import { ProductDetails } from "./pages/Details";
import { SearchPage } from "./pages/SearchPage";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-arrival" element={<NewArrival />} />
      <Route path="/specific-category/:name" element={<CategoryPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/search/:query" element={<SearchPage />} />

      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
