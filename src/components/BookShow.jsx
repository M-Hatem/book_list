import { useState } from "react";

import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleDelete = () => {
    onDelete(book.id);
  };

  const editBook = (newTitle) => {
    onEdit(book, newTitle);
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
