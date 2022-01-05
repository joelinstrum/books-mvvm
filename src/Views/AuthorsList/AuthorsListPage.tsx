import React from "react";
import AuthorsList from "./components/AuthorsList";

const AuthorsListPage = () => {
  return (
    <div>
      <div>
        <a href="./">&#x2190; Back</a>
      </div>
      <div>Authors Page</div>
      <AuthorsList />
    </div>
  );
};

export default AuthorsListPage;
