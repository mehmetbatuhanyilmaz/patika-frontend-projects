import { useBasket } from "../../../contexts/BasketContext";
import { Link } from "react-router-dom";

import "./style.css";

function Card({ product }) {
  const { addToBasket, removeBasket, addToFavorite } = useBasket();

  return product.map((res) => {
    return (
      <div className="card cardCard" key={res.id}>
        <Link to={`/product/${res.id}`} className="cardLink">
          <img src={`${res.image}/${res.id}`} alt={res.title} />
          <h3 className="cardTitle">{res.title}</h3>
          <p className="price"> {res.price}TL</p>
          <p className="cardDescription">{res.description}</p>
        </Link>
        <p className="btnAll">
          <button onClick={() => addToBasket(res)}>Add </button>
          <button onClick={() => removeBasket(res.id)}>Delete</button>
          <button onClick={() => addToFavorite(res)}>Favorites</button>
        </p>
      </div>
    );
  });
}

export default Card;
