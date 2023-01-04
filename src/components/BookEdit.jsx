import { useState } from "react";

const BookEdit = ({ book: { title }, onEdit }) => {
  const [newTitle, setNewTitle] = useState(title);

  const handleChange = (event) => {
    const value = event.target.value;
    setNewTitle(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(newTitle);
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
