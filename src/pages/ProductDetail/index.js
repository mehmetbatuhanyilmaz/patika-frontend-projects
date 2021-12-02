import { useParams } from "react-router";
import { useBasket } from "../../contexts/BasketContext";

import "./style.css";

function ProductDetail() {
  const {
    product,
    addToBasket,
    basketItems,
    removeBasket,
    addToFavorite,
    favoritesItems,
    removeFavorite,
  } = useBasket();

  const { product_id } = useParams();

  var productDetailData = "";
  var findBasketItem = "";
  var findFavoriteItem = "";
  if (product) {
    productDetailData = product.find((res) => res.id === product_id);

    if (basketItems.length > 0) {
      findBasketItem = basketItems.find((basketItems) => {
        return basketItems.id === productDetailData.id;
      });
    }

    if (favoritesItems.length > 0) {
      findFavoriteItem = favoritesItems.find((favoritesItems) => {
        return favoritesItems.id === productDetailData.id;
      });
    }
  }

  return (
    <>
      {productDetailData === "" && <div>Lütfen Ürün Seçiniz</div>}
      {productDetailData !== "" && (
        <div className="container" style={{ marginBottom: 75 }}>
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
              <img
                src={`${productDetailData.image}/${productDetailData.id}`}
                className="img-fluid PrdetailImg"
                alt="..."
              />
            </div>
            <div className="col ">
              <h1 className="mt-5 fw-bold">{productDetailData.title}</h1>
              <h2 className="mt-5 fw-bold"> {productDetailData.price}TL </h2>
              <p className="mt-5 fw-bold">
                <small>{productDetailData.description}</small>
              </p>
              <div className="d-grid gap-2 mt-5">
                <button
                  className={
                    findFavoriteItem ? "btn btn-secondary" : "btn btn-primary"
                  }
                  type="button"
                  onClick={
                    findFavoriteItem
                      ? () => removeFavorite(productDetailData.id)
                      : () => addToFavorite(productDetailData)
                  }
                >
                  {findFavoriteItem
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
                </button>
                <button
                  className={
                    findBasketItem
                      ? "btn btn-secondary mt-2"
                      : "btn btn-success mt-2"
                  }
                  type="button"
                  onClick={
                    findBasketItem
                      ? () => removeBasket(productDetailData.id)
                      : () => addToBasket(productDetailData)
                  }
                >
                  {findBasketItem ? "Remove from Basket" : "Add to Basket"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
