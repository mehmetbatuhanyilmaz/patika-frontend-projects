import { useBasket } from "../../../contexts/BasketContext";

import "./style.css";

function Card({ product }) {
  const { addToBasket, removeBasket, addToFavorite } = useBasket();

  return product.map((res) => {
    return (
      <div className="card" key={res.id}>
        <img src={`${res.image}/${res.id}`} alt={res.title} />
        <h3 className="cardTitle">{res.title}</h3>
        <p className="price"> {res.price}TL</p>
        <p className="cardDescription">{res.description}</p>
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

