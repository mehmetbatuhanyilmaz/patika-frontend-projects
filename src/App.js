
// import "./App.css";
// import Mockapi from "./servis/Mockapi";

// function App() {
//   return (
//     <div className="App">
//       <Mockapi />
//     </div>
//   );
// }

// export default App; 

import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Basket from "./pages/Basket";
import Favorites from "./pages/Favorites";

import Alerts from "./components/Alerts";
import ProductDetail from "./pages/ProductDetail";
import Error404 from "./pages/Error404";

import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>

      <div>
        <Navbar />
        <Alerts />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/basket" element={<Basket />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </div>

    </>
  );
}

export default App;