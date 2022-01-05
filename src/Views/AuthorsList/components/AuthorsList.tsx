import React, { useEffect } from "react";
import useAuthorsList from "../ViewControllers/useAuthorsList";
import { Loading } from "../../../UI-components";

const AuthorsList = () => {
  const { isLoading, authorsList } = useAuthorsList();

  return (
    <Loading isLoading={isLoading} message="Loading authors">
      <table className="table-list">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>More Info</th>
          </tr>
          {authorsList &&
            authorsList.map((author, index) => {
              return (
                <tr key={`author-${index}`}>
                  <td>{author.id}</td>
                  <td align="right">
                    {author.firstName} {author.lastName}
                  </td>
                  <td align="center">{author.id}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Loading>
  );
};

export default AuthorsList;
