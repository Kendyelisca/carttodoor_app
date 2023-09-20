import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProductList from "../../components/product/ProductList";
const Home = () => {
  return (
    <>
      {/* Navigation bar */}
      <Navbar />
      {/* Main content */}
      <ProductList />
      {/* Footer content */}
      <Footer />
    </>
  );
};

export default Home;
