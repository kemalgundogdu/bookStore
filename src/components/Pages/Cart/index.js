import React, { useEffect } from "react";
import { useBasket } from "../../../context/BasketContext";

function Cart() {
  const { addToBasket, items, setItems } = useBasket();

  useEffect(() => {
    const storedItems = localStorage.getItem("basketItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, [setItems]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {items.length<1 && "There are no items in your cart"}
        {items.map((book, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-card p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded bg-slate-100 shadow-lg">
                <img
                  src={book.image}
                  alt={book.title}
                  width={100}
                  height={140}
                  className="rounded-lg"
                  style={{ aspectRatio: "80/120", objectFit: "cover" }}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-muted-foreground">{book.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button variant="outline" onClick={() => addToBasket(book)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
