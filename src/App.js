import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Menu1 from "./components/Menu1";
import Menu2 from "./components/Menu2";
import Menu3 from "./components/Menu3";
import Menu4 from "./components/Menu4";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState({});

  const addToCart = (itemName, price) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[itemName]) {
        updatedCart[itemName].quantity++;
      } else {
        updatedCart[itemName] = { quantity: 1, price };
      }
      return updatedCart;
    });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/menu/fastfood" element={<Menu2 />} />
          <Route path="/menu/drink" element={<Menu3 />} />
          <Route path="/menu/icecream" element={<Menu4 />} />
          <Route
            path="/menu/dinner"
            element={<Menu1 addToCart={addToCart} />}
          />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
