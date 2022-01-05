import { useState } from "react";

import { useGetManyBooks } from "../../../Controllers/Books";
import { TBook } from "../../../Models/BooksModel";

// this is the "ViewController" (has access to the ViewModel and handles user input)
const useBooksList = () => {
  const [selectedBook, setSelectedBook] = useState<TBook>();
  const { isLoading, booksList } = useGetManyBooks(1, 10);

  return {
    selectedBook,
    setSelectedBook,
    isLoading,
    booksList
  };
};

export default useBooksList;
