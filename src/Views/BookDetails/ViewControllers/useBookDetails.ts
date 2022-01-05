import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useGetBookById } from "../../../Controllers/Books";

// this is the "ViewController" (has access to the ViewModel and handles user input)
const useBookDetails = () => {
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const bookId = query.get("id") || "";

  const { isLoading, book } = useGetBookById(bookId);

  return {
    isLoading,
    book
  };
};

export default useBookDetails;
