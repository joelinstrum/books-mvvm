import { Link } from "react-router-dom";

import PageTitle from "../../UI-components/PageTitle";
import BookDetails from "./components/BookDetails";
import useBookDetails from "./ViewControllers/useBookDetails";

// View (UI layer that users interact with)
const BookDetailsPage = () => {
  const { isLoading, book } = useBookDetails();

  if (isLoading) {
    return <h1>Loading book</h1>;
  }

  if (!book) {
    return (
      <>
        <h1>Sorry, this book doesn't exist :(</h1>
        <span>
          Back to <Link to="/">books list page</Link>
        </span>
      </>
    );
  }

  return (
    <>
      <PageTitle title="Book Details" />
      <BookDetails book={book} />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 100
        }}
      >
        <span>
          Back to <Link to="/">books list page</Link>
        </span>
      </div>
    </>
  );
};

export default BookDetailsPage;
