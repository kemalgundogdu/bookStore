import { createContext, useContext, useState, useEffect } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [localStorageItems, setLocalStorageItems] = useState([]); 

  useEffect(() => {
    const storedItems = localStorage.getItem("basketItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems)); // items'i günceller
      setLocalStorageItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(items));
    setLocalStorageItems(items); // localStorageItems'i günceller
  }, [items]);

  const findBasketItem = (bookId) => {
    return items.find((item) => item.isbn13 === bookId);
  };

  const addToBasket = (data) => {
    const findBasketItemResult = findBasketItem(data.isbn13);
    if (!findBasketItemResult) {
      setItems((prevItems) => [...prevItems, data]);
    } else {
      setItems((prevItems) =>
        prevItems.filter((item) => item.isbn13 !== data.isbn13)
      );
    }
  };

  const values = {
    items,
    setItems,
    addToBasket,
    localStorageItems
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};

export { BasketProvider, useBasket };
