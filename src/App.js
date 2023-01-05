import { useState, useEffect } from "react";
import axios from "axios";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  // To get all books
  const fetchBooks = async () => {
    const { data } = await axios("http://localhost:3001/books");
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // To create a book
  const createBook = async (title) => {
    const { data } = await axios.post("http://localhost:3001/books", {
      title,
    });
    setBooks([...books, data]);
  };

  // To delete a book
  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const newBooks = books.filter((book) => book.id !== id);
    setBooks([...newBooks]);
  };

  // To edit a book
  const editBook = async (book, newTitle) => {
    const { data } = await axios.put(`http://localhost:3001/books/${book.id}`, {
      title: newTitle,
    });

    const newBooks = books.map((el) => {
      if (el.id === book.id) return { ...book, ...data };

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
