import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Cart from "./components/cart/Cart";
import { ShopContextProvider } from "./contexts/shop-context";
import { UserContextProvider } from "./contexts/user-context";
import Account from "./components/account/Account";
import Checkout from "./components/checkout/Checkout";
import ContactSection from "./components/contact/Contact";
import ServicesSection from "./components/services/Service";
import AboutUsSection from "./components/aboutus/AboutUs";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { CartContextProvider } from "./contexts/cart-context";
function App() {
  return (
    <>
      <ShopContextProvider>
        <UserContextProvider>
          <CartContextProvider>
            {" "}
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" index element={<Home />} />
                {/* <Route path="/products" element={<ProductList />} /> */}
                {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/account" element={<Account />} />
                <Route path="/contact" element={<ContactSection />} />
                <Route path="/services" element={<ServicesSection />} />
                <Route path="/aboutus" element={<AboutUsSection />} />
                {/* <Route path="/checkout" element={<Checkout />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* Add more routes as needed */}
              </Routes>
              <Footer />
            </Router>
          </CartContextProvider>
        </UserContextProvider>
      </ShopContextProvider>
    </>
  );
}

export default App;
