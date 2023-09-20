import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-content">
      <div className="list-container">
        <div className="list">
          <b>Here to Help</b>
          <p>
            <a href="">Help and FAQs</a>
          </p>
          <p>
            <a href="">Contact us</a>
          </p>
        </div>
        <div className="list">
          <b>About CarttoDoorMarket</b>
          <p>
            <a href="">Store vacancies</a>
          </p>
          <p>
            <a href="">Careers</a>
          </p>{" "}
          <p>
            <a href="">Sustainability</a>
          </p>
        </div>
        <div className="list">
          <b>Our website</b>
          <p>
            <a href="">Terms & Conditions</a>
          </p>
          <p>
            <a href="">Privacy & Cookie Policy</a>
          </p>
          <p>
            <a href="">Privacy Center</a>
          </p>
          <p>
            <a href="">Accessibility</a>
          </p>
        </div>
      </div>
      <div className="socials">
        <p>Follow us</p>
        <a href="">
          <BsFacebook />
        </a>
        <a href="">
          <AiFillTwitterCircle />
        </a>
        <a href="">
          <AiFillInstagram />
        </a>
        <a href="">
          <AiFillYoutube />
        </a>
      </div>
      <p className="rights">
        &copy; cartToDoorMarket.com 2023 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
