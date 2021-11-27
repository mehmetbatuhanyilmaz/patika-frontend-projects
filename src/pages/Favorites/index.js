import { useState, useEffect } from "react";
import { useBasket } from "../../contexts/BasketContext";
import { Link } from "react-router-dom";

import "../../App.css";
import "./style.css";

export default function Favorites() {


const { favoritesItems, addToBasket, removeFavorite } = useBasket();
  const [isShown, setIsShown] = useState({ status: false, indexNumber: "" });

  return (
    <>

      <div className="favorites ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4 favoriteContainer ">
            {favoritesItems.map((res, index) => {
              return (
                <div className="col" key={res.id}>
                  <div
                    className="card favoriteCard"
                    onMouseEnter={() => {
                      setIsShown({ status: true, indexNumber: index });
                    }}
                    onMouseLeave={() => setIsShown(false)}
                  >
                    <img
                      src={`${res.image}/${res.id}`}
                      className="card-img-top favoriteImg"
                      alt={res.id}
                    />


                    <div className="card-img-overlay overlayBalloon">
                      <span className="card-text favoritePrice">
                        {res.price}
                      </span>
                      {isShown.status && isShown.indexNumber === index && (
                        <span className="card-text favoriteAction">
                          <span
                            className="favoriteBasketBtn"
                            onClick={() => addToBasket(res)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-cart-check-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                            </svg>
                          </span>
                          <span
                            className="favoriteRemoveBtn"
                            onClick={() => removeFavorite(res.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-trash-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg>
                          </span>
                        </span>
                      )}
                    </div>
                    <Link to={`/product/${res.id}`} className="favoriteLink">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          <small>{res.title}</small>
                        </h5>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
     
     </>
);
}