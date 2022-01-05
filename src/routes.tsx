import { Routes, Route } from "react-router-dom";

import {
  AppPage,
  BooksListPage,
  BookDetailsPage,
  AuthorsListPage,
} from "./Views";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route element={<AppPage />} path="/" />
      <Route element={<BooksListPage />} path="/books" />
      <Route element={<BookDetailsPage />} path="/book" />
      <Route element={<AuthorsListPage />} path="/authors" />
    </Routes>
  );
};

export default CustomRoutes;
