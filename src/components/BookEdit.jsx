import { useState } from "react";

import useBooksContext from "../hooks/use-books-context";

const BookEdit = ({ book, onEdit }) => {
  const [newTitle, setNewTitle] = useState(book.title);

  const { editBook } = useBooksContext();

  const handleChange = (event) => {
    const value = event.target.value;
    setNewTitle(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editBook(book, newTitle);
    onEdit();
  };

  return (
    <div className="book-edit">
      <form onSubmit={handleSubmit}>
        <label>Edit</label>
        <input value={newTitle} onChange={handleChange} className="input" />
        <button type="submit" className="button is-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default BookEdit;
