import { Link } from "react-router-dom";
import { TBook } from "../../../Models/BooksModel";

type Props = {
  selectedBook: TBook;
};

// View (UI layer that users interact with)
const SelectedBook = ({ selectedBook }: Props) => {
  return (
    <section style={{ marginBottom: 26 }}>
      <h2 style={{ margin: 0 }}>Selected Book is: {selectedBook.title}</h2>
      <p style={{ margin: 0 }}>
        Check more details <Link to={`/book?id=${selectedBook.id}`}>here</Link>
      </p>
    </section>
  );
};

export default SelectedBook;
