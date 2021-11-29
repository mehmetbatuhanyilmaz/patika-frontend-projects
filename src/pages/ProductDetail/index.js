import { useParams } from "react-router";
import { useBasket } from "../../contexts/BasketContext";

import "./style.css";

function ProductDetail() {
  const { product, addToBasket, addToFavorite } = useBasket();
  const { product_id } = useParams();

  let ProductDetailData = "";
  if (product) {
    ProductDetailData = product.find((res) => res.id === product_id);
  }

  return (
    <>
      {ProductDetailData === "" && <div>Lütfen Ürün Seçiniz</div>}
      {ProductDetailData !== "" && (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
              <img
                src={`${ProductDetailData.image}/${ProductDetailData.id}`}
                className="img-fluid PrdetailImg"
                alt="..."
              />
            </div>
            <div className="col ">
              <h1 className="mt-5 fw-bold">{ProductDetailData.title}</h1>
              <h2 className="mt-5 fw-bold"> {ProductDetailData.price}TL </h2>
              <p className="mt-5 fw-bold">
                <small>{ProductDetailData.description}</small>
              </p>
              <div className="d-grid gap-2 mt-5">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => addToFavorite(ProductDetailData)}
                >
                  AddToFavorite
                </button>
                <button
                  className="btn btn-success mt-2"
                  type="button"
                  onClick={() => addToBasket(ProductDetailData)}
                >
                  AddToBasket
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
