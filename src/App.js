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
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer/>
    </div>
    
    </>
  );
}

export default App;
