import { createContext, useState, useCallback } from "react";
import axios from "axios";

const booksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // To get all books
  const fetchBooks = useCallback(async () => {
    const { data } = await axios("http://localhost:3001/books");
    setBooks(data);
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

  const value = {
    books,
    createBook,
    editBook,
    deleteBook,
    fetchBooks,
  };

  // console.log(children);
  return (
    <booksContext.Provider value={value}>{children}</booksContext.Provider>
  );
};

export { Provider };
export default booksContext;
