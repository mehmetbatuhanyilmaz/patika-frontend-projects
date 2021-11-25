import React, { useState, createContext, useContext, useEffect } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [favoritesItems, setFavoritesItems] = useState("");

  const addToBasket = (item) => {
    setBasketItems((basketItems) => [item, ...basketItems]);
  };

  useEffect(() => {}, [basketItems]);

  const removeBasket = (item) => {};
  const addToFavorite = (item) => {};

  const values = {
    basketItems,
    setBasketItems,
    favoritesItems,
    setFavoritesItems,
    addToBasket,
    removeBasket,
    addToFavorite,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);
export { BasketProvider, useBasket };
