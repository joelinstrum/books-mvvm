import SelectedBook from "./components/SelectedBook";
import BooksList from "./components/BooksList";
import PageTitle from "../../UI-components/PageTitle";
import useBooksList from "./ViewControllers/useBooksList";
import { Header, Loading, AppWrapper } from "../../UI-components";

// View (UI layer that users interact with)
const BooksListPage = () => {
  const { booksList, isLoading, selectedBook, setSelectedBook } =
    useBooksList();

  return (
    <AppWrapper>
      <Header />
      <PageTitle title="Books List" />
      <Loading isLoading={isLoading} message="Loading books">
        {selectedBook && <SelectedBook selectedBook={selectedBook} />}
        {booksList && (
          <BooksList booksList={booksList} handleBookSelect={setSelectedBook} />
        )}
      </Loading>
    </AppWrapper>
  );
};

export default BooksListPage;
