import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
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
        <a
          href="https://web.facebook.com/messages/t/100057301837801"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://twitter.com/EliscaKendy"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://www.instagram.com/kendyelisca5/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://github.com/Kendyelisca"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
      <p className="rights">
        &copy; cartToDoorMarket.com 2023 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
