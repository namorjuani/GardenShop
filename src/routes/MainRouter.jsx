import React from "react";
import { CartProvider } from "../context/CartContext"; // Importa el CartProvider
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Item from "../pages/Item";
import NavBar from "../components/NavBar";
import CreateProduct from "../pages/CreateProducts";
import Cart from "../pages/Cart"

const MainRouter = () => {
  return (
    <CartProvider> {/* Envuelve el MainRouter con el CartProvider */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/item/:itemId" element={<Item />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default MainRouter;








// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Category from "../pages/Category";
// import Item from "../pages/Item";
// import NavBar from "../components/NavBar";
// import CreateProduct from "../pages/CreateProducts";
// import Cart from "../pages/Cart"

// const MainRouter = () => {
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/category/:categoryId" element={<Category />} />
//         <Route path="/item/:itemId" element={<Item />} />
//         <Route path="/create-product" element={<CreateProduct />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// };

// export default MainRouter;

