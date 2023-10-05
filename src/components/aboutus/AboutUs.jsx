import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./about.css";
function AboutUsSection() {
  return (
    <>
      <Navbar />
      <section className="about-us-section">
        <div className="container-about">
          <h2>About CartToDoor Market</h2>
          <div className="about-us-content">
            <div className="about-us-image">
              {/* Add an image that represents your brand */}
              <img src="./store-logo.png" alt="CartToDoor Market Logo" />
            </div>
            <div className="about-us-text">
              <p>
                CartToDoor Market is your go-to destination for an exceptional
                online shopping experience. Our mission is to provide you with
                high-quality products, fast and reliable delivery, and
                outstanding customer service.
              </p>
              <p>
                Founded in [Year of Establishment], we've been serving customers
                across the globe, offering a wide range of products, from
                electronics and fashion to home goods and more.
              </p>
              <p>
                What sets us apart is our commitment to your satisfaction. Our
                team is dedicated to ensuring that you have a seamless shopping
                journey from start to finish.
              </p>
              <p>
                Thank you for choosing CartToDoor Market. We look forward to
                serving you and becoming your trusted online shopping
                destination.
              </p>
            </div>
          </div>
        </div>{" "}
      </section>
      <Footer />
    </>
  );
}

export default AboutUsSection;
