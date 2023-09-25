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
function App() {
  return (
    <>
      <ShopContextProvider>
        <UserContextProvider>
          {" "}
          <Router>
            <Routes>
              <Route path="/" index element={<Home />} />
              {/* <Route path="/products" element={<ProductList />} /> */}
              {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/account" element={<Account />} />
              {/* <Route path="/checkout" element={<Checkout />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* Add more routes as needed */}
            </Routes>
          </Router>
        </UserContextProvider>
      </ShopContextProvider>
    </>
  );
}

export default App;
