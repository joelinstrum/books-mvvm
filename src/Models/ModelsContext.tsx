import React, { useState, createContext } from "react";
import { TBook } from "./BooksModel";
import { TAuthor } from "./AuthorsModel";

const useValue = () => {
  const [books, setBooks] = useState<TBook[]>();
  const [authors, setAuthors] = useState<TAuthor[]>();
  const [authorsLoading, setAuthorsLoading] = useState(false);
  return {
    books,
    setBooks,
    authors,
    setAuthors,
    authorsLoading,
    setAuthorsLoading
  };
};

export const ModelContext = createContext({} as ReturnType<typeof useValue>);

export const ModelProvider: React.FC<any> = (props) => {
  return (
    <ModelContext.Provider value={useValue()}>
      {props.children}
    </ModelContext.Provider>
  );
};
