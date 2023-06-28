import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./Context/CartContext";
import Cart from "./Components/Cart/Cart";
// import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="Ecommerce-FightingSticks/"
            element={<ItemListContainer />}
          />
          <Route
            path="category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route
            path="item/:id"
            element={<ItemDetailContainer />}
          />
          <Route
            path="cart"
            element={<Cart />}
          />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
