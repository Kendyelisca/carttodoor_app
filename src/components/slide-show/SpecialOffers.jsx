import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./specialOffers.css"; // Import the CSS file
const SpecialOffers = () => {
  const specialOffers = [
    {
      id: 1,
      title: "50% Off when you buy 2 or more",
      image: "./headset-offer.webp",
    },
    {
      id: 2,
      title: "Virtual Reality Headset - 30% Off",
      image: "./virtual-h.webp", // Replace with the actual image path
    },
    {
      id: 3,
      title: "Smart Watch Sale - Save 20%",
      image: "./watch.jpeg", // Replace with the actual image path
    },
    {
      id: 4,
      title: "Homepod specials - Up to 60% Off",
      image: "./homepod.webp", // Replace with the actual image path
    },
    {
      id: 5,
      title: "Tech Gadgets Extravaganza - Limited-time Discounts",
      image: "./gadget.jpg", // Replace with the actual image path
    },
  ];

  return (
    <div className="special-offers">
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
        {specialOffers.map((offer) => (
          <div key={offer.id}>
            <img src={offer.image} alt={offer.title} />
            <p className="legend">{offer.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SpecialOffers;
