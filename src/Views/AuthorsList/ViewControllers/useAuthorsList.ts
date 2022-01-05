import { useState } from "react";
import { useGetManyAuthors } from "../../../Controllers/Authors";
import { TAuthor } from "../../../Models/AuthorsModel";

// this is the "ViewController" (has access to the ViewModel and handles user input)
const useAuthorsList = () => {
  const [selectedAuthor, setSelectedAuthor] = useState<TAuthor>();
  const { isLoading, authorsList } = useGetManyAuthors(1, 100);

  return {
    selectedAuthor,
    setSelectedAuthor,
    isLoading,
    authorsList
  };
};

export default useAuthorsList;
