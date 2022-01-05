import ListItem from "../../../UI-components/ListItem";
import { TBook } from "../../../Models/BooksModel";

type Props = {
  booksList: TBook[];
  handleBookSelect: (book: TBook) => void;
};

// View (UI layer that users interact with)
const BooksList = ({ booksList, handleBookSelect }: Props) => {
  return (
    <table className="table-list">
      <tbody>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Pages</th>
        </tr>
        {booksList?.map((book) => (
          <ListItem
            key={book.id}
            id={book.id}
            title={`Book title: ${book.title}`}
            pageCount={book.pageCount}
            subtitle={`Number of pages: ${book.pageCount}`}
            handleClick={() => handleBookSelect(book)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BooksList;
