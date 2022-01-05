import { useQuery } from "react-query";
import { useEffect, useContext } from "react";
import { AuthorsModel } from "../../Models/AuthorsModel";
import { ModelContext } from "../../Models/ModelsContext";

const { fetchMany, key } = AuthorsModel;

// acting as ViewModel (has access to the Model and handles business logic)
const useGetManyAuthors = (page = 1, authorsQuantity = 10) => {
  const { authors, setAuthors } = useContext(ModelContext);

  const { data, isLoading, isError } = useQuery(
    [key, page],
    () => fetchMany({ limit: authorsQuantity, page }),
    { enabled: Boolean(!authors) }
  );

  useEffect(() => {
    setAuthors(data?.slice(0, authorsQuantity));
  }, [data, authorsQuantity, setAuthors]);

  return {
    authorsList: authors,
    isLoading,
    isError
  };
};

export default useGetManyAuthors;
