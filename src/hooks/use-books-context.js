import { useContext } from "react";
import booksContext from "../context/books";

const useBooksContext = () => useContext(booksContext);

export default useBooksContext;
