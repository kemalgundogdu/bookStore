import React, { useEffect } from "react";
import { getBooks } from "../../../api";
import { useBooks } from "../../../context/BookContext";
import { useBasket } from "../../../context/BasketContext";

function Home() {
  const { books, setBooks } = useBooks();
  const { addToBasket, items, setItems } = useBasket();

  useEffect(() => {
    const storedItems = localStorage.getItem("basketItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, [setItems]);

  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data.books);
    });
  }, [setBooks]);

  useEffect(() => {
    if (items.length > 0) {
      // Sadece items dolu olduğunda localStorage'ı günceller
      localStorage.setItem("basketItems", JSON.stringify(items));
    }
  }, [items]);

  return (
    <div className="container mx-auto">
      <main className="flex-1 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 bg-slate-100"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={book.image}
                  alt="Book Cover"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                  style={{ aspectRatio: "300/400", objectFit: "cover" }}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold text-white">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-300">{book.subtitle}</p>
                <button
                  onClick={() => addToBasket(book)}
                  className="mt-4 text-slate-100 border-[1px] rounded p-2"
                >
                  {items.some((item) => item.isbn13 === book.isbn13)
                    ? "Remove from basket"
                    : "Add to basket"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
