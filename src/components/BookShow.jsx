import { useState } from "react";

import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteBook } = useBooksContext();

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleDelete = () => {
    deleteBook(book.id);
  };

  const editBook = () => {
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img
        alt={book.title}
        src={`https://picsum.photos/seed/${book.title}/300/200
`}
      />
      {showEdit ? (
        <BookEdit book={book} onEdit={editBook} />
      ) : (
        <h3>{book.title}</h3>
      )}
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
