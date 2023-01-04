import { useState } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { id: Math.round(Math.random() * 9999 + 1), title }]);
  };

  const deleteBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks([...newBooks]);
  };

  const editBook = (book, newTitle) => {
    const newBooks = books.map((el) => {
      if (el.id === book.id) return { ...book, title: newTitle };

      return el;
    });

    setBooks(newBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
