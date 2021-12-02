import React, { useState, createContext, useContext, useEffect } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [product, setProduct] = useState("");


  const [basketItems, setBasketItems] = useState(
    JSON.parse(localStorage.getItem("basket"))
      ? JSON.parse(localStorage.getItem("basket"))
      : []

    // JSON.parse(localStorage.getItem("basket")) === null &&  []
    //  JSON.parse(localStorage.getItem("basket"))
  );
  const [favoritesItems, setFavoritesItems] = useState(
    JSON.parse(localStorage.getItem("favorites"))
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );


  const [alert, setAlert] = useState({});

  const alertMessage = (status, color, description) => {
    setAlert({
      status,
      color,
      description,
    });
  };

  const alertTime = () => {
    setTimeout(() => {
      setAlert({});
    }, 2000);
  };

  const addToBasket = (item) => {
    let basketControl = basketItems.find((res) => res.id === item.id);

    if (basketControl === undefined) {
      setBasketItems((basketItems) => [item, ...basketItems]);

      alertMessage(
        "Success",
        "warning",
        "The Product Has Been Added to Basket"
      );

      alertTime();
    } else {
      alertMessage("Warning", "light", "The product has already been added");

      alertTime();
    }
  };

  const removeBasket = (item) => {
    var listAfterDeletionBasket = basketItems.filter((res) => res.id !== item);

    setBasketItems(listAfterDeletionBasket);

    alertMessage("Deleted", "danger", "The Product Has Been Deleted");

    alertTime();
  };
  const addToFavorite = (item) => {
    let favoritesControl = favoritesItems.find((res) => res.id === item.id);

    if (favoritesControl === undefined) {
      setFavoritesItems((favoritesItems) => [item, ...favoritesItems]);

      alertMessage(
        "Success",
        "primary",
        "The Product Has Been Added to Favorites"
      );

      alertTime();
    } else {
      alertMessage("Warning", "light", "The product has already been added");

      alertTime();
    }
  };
  const removeFavorite = (item) => {
    var listAfterDeletionFavorite = favoritesItems.filter(
      (res) => res.id !== item
    );

    setFavoritesItems(listAfterDeletionFavorite);

    alertMessage("Deleted", "danger", "The Product Has Been Deleted");

    alertTime();
  };

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketItems));
  }, [basketItems]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritesItems));
  }, [favoritesItems]);

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
    alert,
    setAlert,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);
export { BasketProvider, useBasket };
