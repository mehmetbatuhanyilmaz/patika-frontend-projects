import { useEffect } from "react";
import mockapi from "../../service/Mockapi";
import { useBasket } from "../../contexts/BasketContext";

import Carousel from "nuka-carousel";
import CatalogPicture from "../../components/CatologPicture";

import image from "../../images/kraftCo.jpeg";
import Logo from "../../images/Logo.jpg";
import Logo1 from "../../images/Logo1.jpg";
import Logo2 from "../../images/Logo2.jpg";
import Logo3 from "../../images/Logo3.jpg";
import Logo4 from "../../images/Logo4.jpg";

import "../../App.css";
import "./home.css";

function Home() {
  const { setProduct } = useBasket();

  useEffect(() => {
    setTimeout(() => {
      mockapi().then((res) => {
        setProduct(res.data);
      });
    }, 1000);
  }, []);

  return (
    <>
      <div style={{ backgroundImage: `url(${image})` }}>
        <Carousel className="slaytResim">
          <img className="homeImg" src={Logo} />
          <img className="homeImg" src={Logo1} />
          <img className="homeImg" src={Logo2} />
          <img className="homeImg" src={Logo3} />
          <img className="homeImg" src={Logo4} />
        </Carousel>
        <CatalogPicture />
      </div>
    </>
  );
}

export default Home;
