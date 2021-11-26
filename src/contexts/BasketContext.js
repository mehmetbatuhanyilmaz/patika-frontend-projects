import React, { useState, createContext, useContext, useEffect } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [favoritesItems, setFavoritesItems] = useState([]);

  useEffect(() => {}, [basketItems]);

  const addToBasket = (item) => {
    setBasketItems((basketItems) => [item, ...basketItems]);
  };

  const removeBasket = (item) => {
    var listAfterDeletionBasket = basketItems.filter((res) => res.id !== item);

    setBasketItems(listAfterDeletionBasket);
  };
  const addToFavorite = (item) => {
    setFavoritesItems((favoritesItems) => [item, ...favoritesItems]);
  };
  const removeFavorite = (item) => {
    var listAfterDeletionFavorite = favoritesItems.filter(
      (res) => res.id !== item
    );

    setFavoritesItems(listAfterDeletionFavorite);
  };

  const values = {
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
