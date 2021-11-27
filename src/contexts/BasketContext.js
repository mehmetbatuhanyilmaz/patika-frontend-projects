import React, { useState, createContext, useContext, useEffect } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [product, setProduct] = useState("");

  const [basketItems, setBasketItems] = useState([]);
  const [favoritesItems, setFavoritesItems] = useState([]);

  useEffect(() => {}, [basketItems]);

  const addToBasket = (item) => {
    let basketControl = basketItems.find((res) => res.id === item.id);

    if (basketControl === undefined) {
      setBasketItems((basketItems) => [item, ...basketItems]);
    }
  };

  const removeBasket = (item) => {
    var listAfterDeletionBasket = basketItems.filter((res) => res.id !== item);

    setBasketItems(listAfterDeletionBasket);
  };
  const addToFavorite = (item) => {
    let favoritesControl = favoritesItems.find((res) => res.id === item.id);

    if (favoritesControl === undefined) {
      setFavoritesItems((favoritesItems) => [item, ...favoritesItems]);
    }
  };
  const removeFavorite = (item) => {
    var listAfterDeletionFavorite = favoritesItems.filter(
      (res) => res.id !== item
    );

    setFavoritesItems(listAfterDeletionFavorite);
  };

  const values = {
    product,
    setProduct,
    basketItems,
    setBasketItems,
    favoritesItems,
    setFavoritesItems,
    addToBasket,
    removeBasket,
    addToFavorite,
    removeFavorite,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);
export { BasketProvider, useBasket };
