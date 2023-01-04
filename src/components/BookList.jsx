import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} onDelete={onDelete} onEdit={onEdit} book={book} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
