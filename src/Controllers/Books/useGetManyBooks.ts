import { useQuery } from "react-query";
import { BooksModel } from "../../Models/BooksModel";

const { fetchMany, key } = BooksModel;

// acting as ViewModel (has access to the Model and handles business logic)
const useGetManyBooks = (page = 1, booksQuantity = 10) => {
  const { data, isLoading, isError } = useQuery([key, page], () =>
    fetchMany({ limit: booksQuantity, page })
  );

  return {
    booksList: data?.slice(0, booksQuantity),
    isLoading,
    isError
  };
};

export default useGetManyBooks;
