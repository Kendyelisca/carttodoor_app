import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <>
      {/* Barra de navegación */}
      <Navbar />
      {/* Contenido principal */}
      <div>
        <div className="home-container">
          <h1>CartToDoorMarket</h1>
          <h2>Your quickest online supermarket</h2>
        </div>
        {/* Pie de página */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
