import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Testimonial = () => {
  const [imageGallery, setImageGallery] = useState([]);
  useEffect(() => {
    fetch("https://assinment-10-server-ten.vercel.app/tourist-sports")
      .then((res) => res.json())
      .then((result) => setImageGallery(result))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="carousel carousel-end">
      {imageGallery.map((image, index) => (
        <div className="carousel-item" key={index}>
          <Link to={`/tourist-sport/${image._id}`}>
            <img src={image.image_URL} alt="Drink" className="w-[600px]" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
