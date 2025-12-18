import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cartpage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import Faq from "./pages/Faq";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import { store } from "./App/Store";
import { Provider } from "react-redux";

function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/cart" element={<Cartpage />} />
       <Route path="/product/:id" element={<ProductDetails />} />
       <Route path="/faqs" element={<Faq />} />
    </Routes>
     <Footer />
  </BrowserRouter>
  </Provider>
  
  );
}

export default App;
