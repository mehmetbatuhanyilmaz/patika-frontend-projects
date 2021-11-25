import { useEffect, useState } from "react";
import mockapi from "../../service/Mockapi";
import Card from "./Card";
import "./style.css";
import LoadingSvg from "../../images/loading.svg";

function Cards() {
  const [product, setProduct] = useState("");

  useEffect(() => {
    setTimeout(() => {
      mockapi().then((res) => {
        setProduct(res.data);
      });
    }, 1000);
  }, []);

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
