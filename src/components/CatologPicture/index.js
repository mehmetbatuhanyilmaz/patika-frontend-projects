import React from "react";
import { Link } from "react-router-dom";
import { useBasket } from "../../contexts/BasketContext";

import girlPicture from "../../images/girlPicture.jpg";
import malePicture from "../../images/malePicture.jpg";
import kidPicture from "../../images/childPicture.jpg";

import womenlong1 from "../../images/womenlong1.jpg";
import womenlong2 from "../../images/womenlong2.jpg";
import womenlong3 from "../../images/womenlong3.jpg";
import womenshort1 from "../../images/womenshort1.jpeg";
import womenshort2 from "../../images/womenshort2.jpg";
import womenshort3 from "../../images/womenshort3.jpg";
import manlong1 from "../../images/manlong1.jpg";
import manlong2 from "../../images/manlong2.jpeg";
import manlong3 from "../../images/manlong3.jpg";
import manshort1 from "../../images/manshort1.jpg";
import manshort2 from "../../images/manshort2.jpg";
import manshort3 from "../../images/manshort3.jpg";

import "./style.css";

function CatalogPicture() {
  const { product } = useBasket();

  return (
    <div>
      <div className="container p-0 ">
        <div className="row">
          <div className="col-md-10">
            <div className="row homeLongContent">


              <div className="col " style={{marginTop:-20}, {marginBottom: 80}}>
                <div className="card-group mt-3 mb-2 me-5 ms-5" >
                  <Link to="/products" className="card">
                    <div>
                      <img
                        src={girlPicture}
                        className="card-img-top border-start border-2 rounded"
                        alt="girlPicture"
                      />
                      <div className=" card-img-overlay card-body homePeople ">
                        <h5 className="card-title ">WOMEN</h5>
                      </div>
                    </div>
                  </Link>

                  <Link to="/products" className="card ms-2">
                    <div>
                      <img
                        src={malePicture}
                        className="card-img-top border-start border-2 rounded"
                        alt="malePicture"
                      />
                      <div className=" card-img-overlay card-body homePeople">
                        <h5 className="card-title ">MEN</h5>
                      </div>
                    </div>
                  </Link>

                  <Link to="/products" className="card ms-2" >
                    <div>
                      <img
                        src={kidPicture}
                        className="card-img-top border-start border-2 rounded"
                        alt="childPicture"
                      />
                      <div className=" card-img-overlay card-body homePeople">
                        <h5 className="card-title ">KIDS</h5>
                      </div>
                    </div>
                  </Link>
                  
                </div>
              </div>



              <div className="row p-0 mt-2" style={{opacity:0.8}}>
                <div className="col-4 p-0">
                  <div className="card bg-dark text-white homeLongCard">
                    <img
                      src={manshort1}
                      className="card-img homeLongImg"
                      alt="..."
                    />
                    <div className="card-img-overlay">
                      <h5 className="card-title"></h5>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <div className="card bg-dark text-white homeShortCard">
                    <img
                      src={manlong1}
                      className="card-img homeShortImg"
                      alt="..."
                    />
                    <div className="card-img-overlay">
                      <h5 className="card-title"></h5>
                    </div>
                  </div>
                </div>
              </div>

              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              


              <div className="row p-0 mt-2" style={{opacity:0.7}}>
                <div className="col-8 p-0">
                  <div className="card bg-dark text-white homeLongCard">
                    <img
                      src={manlong2}
                      className="card-img homeLongImg"
                      alt="..."
                    />
                    <div className="card-img-overlay">
                      <h5 className="card-title"></h5>
                    </div>
                  </div>
                </div>
                <div className="col-4  ">
                  <div className="card bg-dark text-white homeShortCard">
                    <img
                      src={manshort3}
                      className="card-img homeShortImg"
                      alt="..."
                    />
                    <div className="card-img-overlay">
                      <h5 className="card-title"></h5>
                    </div>
                  </div>
                </div>
              </div>


              <div className="row p-0 mt-2" style={{opacity:0.8}}>
                <div className="col-4 p-0">
                  <div className="card bg-dark text-white homeLongCard">
                    <img
                      src={womenshort3}
                      className="card-img homeLongImg"
                      alt="..."
                    />
                    <div className="card-img-overlay">
                      <h5 className="card-title"></h5>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <div className="card bg-dark text-white homeShortCard">
                    <img
                      src={womenlong3}
                      className="card-img homeShortImg"
                      alt="..."
                    />
                    <div className="card-img-overlay">
                      <h5 className="card-title"></h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row p-0 mt-2 " style={{marginBottom: 50, opacity:0.7}} > 
                <div className="col-8 p-0">
                  <div className="card bg-dark text-white homeLongCard">
                    <img
                      src={manlong3}
                      className="card-img homeLongImg"
                      alt="..."
                    />
                    <div className="card-img-overlay">
                      <h5 className="card-title"></h5>
                    </div>
                  </div>
                </div>
                <div className="col-4  ">
                  <div className="card bg-dark text-white homeShortCard">
                    <img
                      src={womenshort2}
                      className="card-img homeShortImg"
                      alt="..."
                    />
                    <div className="card-img-overlay">
                      <h5 className="card-title"></h5>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>



          <div className="col-md-2 p-0" style={{opacity:0.7}}>
            <div className="smallSlide mt-3">
              {product !== "" &&
                product.map((res) => {
                  return (
                    <Link
                      to={`/product/${res.id}`}
                      className="card mt-1"
                      key={res.id}
                    >
                      <div>
                        <img
                          src={`${res.image}/${res.id}`}
                          className="card-img-top "
                          alt={res.id}
                        />
                        <div className=" card-img-overlay card-body  ">
                          <p className="card-title smallSlideText ">
                            <small>{res.price}</small>
                          </p>
                        </div>
                        <div className="pb-3">
                          <small className="smallSlideTitleFont">
                            {res.title}
                          </small>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogPicture;
