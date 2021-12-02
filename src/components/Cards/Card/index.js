import { useBasket } from "../../../contexts/BasketContext";
import { Link } from "react-router-dom";

import "./style.css";

function Card({ product }) {
  const {
    addToBasket,
    removeBasket,
    addToFavorite,
    removeFavorite,
    basketItems,
    favoritesItems,
  } = useBasket();

  return product.map((res) => {
    if (basketItems.length > 0) {
      var findBasketItem = basketItems.find((basketItems) => {
        return basketItems.id === res.id;
      });
    }

    if (favoritesItems.length > 0) {
      var findFavoriteItem = favoritesItems.find((favoritesItems) => {
        return favoritesItems.id === res.id;
      });
    }

    return (
      <div className="card cardCard" key={res.id}>
        <Link to={`/product/${res.id}`} className="cardLink">
          <img src={`${res.image}/${res.id}`} alt={res.title} />
          <h3 className="cardTitle">{res.title}</h3>
          <p className="price"> {res.price}TL</p>
          <p className="cardDescription">{res.description}</p>
        </Link>

        <p className="btnAll">
          <button
            onClick={
              findBasketItem
                ? () => removeBasket(res.id)
                : () => addToBasket(res)
            }
            className={findBasketItem ? "bg-secondary" : "bg-dark"}
          >
            {findBasketItem ? " Remove Basket" : "Add Basket"}
          </button>
          <button
            className={findFavoriteItem ? "bg-secondary" : "bg-dark"}
            onClick={
              findFavoriteItem
                ? () => removeFavorite(res.id)
                : () => addToFavorite(res)
            }
          >
            {findFavoriteItem ? "Remove Favorites" : "Add Favorites"}
          </button>
        </p>
      </div>
    );
  });
}

export default Card;

