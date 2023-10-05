import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { FaShippingFast } from "react-icons/fa";
import { GrMultiple } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import "./service.css";
function ServicesSection() {
  return (
    <>
      <Navbar />
      <section className="services-section">
        <div className="container-service">
          <h2>Discover CartToDoor Market Services</h2>
          <div className="service">
            <div className="service-icon">
              <FaShippingFast />
            </div>
            <div className="service-details">
              <h3>Fast and Reliable Delivery</h3>
              <p>
                At CartToDoor Market, we pride ourselves on our speedy and
                reliable delivery service. Your orders will be on their way to
                you in no time, ensuring you get your items when you need them.
              </p>
            </div>
          </div>
          <div className="service">
            <div className="service-icon">
              <GrMultiple />
            </div>
            <div className="service-details">
              <h3>Wide Variety of Products</h3>
              <p>
                Explore our extensive range of products. From electronics to
                fashion, CartToDoor Market offers something for everyone.
                Discover new items and old favorites in our diverse catalog.
              </p>
            </div>
          </div>
          <div className="service">
            <div className="service-icon">
              <BiSupport />
            </div>
            <div className="service-details">
              <h3>Exceptional Customer Support</h3>
              <p>
                Have questions or need assistance? The CartToDoor Market
                customer support team is here to help. We're dedicated to
                providing you with the best shopping experience possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ServicesSection;
