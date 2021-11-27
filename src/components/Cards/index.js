import { useEffect, useState } from "react";
import { useBasket } from "../../contexts/BasketContext";
import Card from "./Card";
import "./style.css";
import LoadingSvg from "../../images/loading.svg";

function Cards() {
  const { product } = useBasket();

  if (product === "") {
    return (
      <div className="loadingIcon">
        <img className="cardsImg" src={LoadingSvg}></img>
      </div>
    );
  } else {
    return (
      <div className="cardsItem">
        <Card product={product} />
      </div>
    );
  }
}

export default Cards;
