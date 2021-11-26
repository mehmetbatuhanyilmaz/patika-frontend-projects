import React from "react";
import "../../App.css";
import "./home.css";

import image from "../../images/kraftCo.jpeg";
import Carousel from "nuka-carousel";
import Logo from "../../images/Logo.jpg";
import Logo1 from "../../images/Logo1.jpg";
import Logo2 from "../../images/Logo2.jpg";
import Logo3 from "../../images/Logo3.jpg";
import Logo4 from "../../images/Logo4.jpg";
export default class extends React.Component {
  render() {
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </>
    );
  }
}

