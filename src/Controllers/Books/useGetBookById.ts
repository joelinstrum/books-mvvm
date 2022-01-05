import { useQuery } from "react-query";
import { BooksModel } from "../../Models/BooksModel";

const { fetchById, key } = BooksModel;

// acting as ViewModel (has access to the Model and handles business logic)
const useGetBookById = (bookId: string) => {
  const { data, isError, isLoading } = useQuery(
    [key, "byId", bookId],
    () => fetchById(bookId, null),
    {
      enabled: Boolean(bookId)
    }
  );

  return {
    book: data,
    isLoading,
    isError
  };
};

export default useGetBookById;
