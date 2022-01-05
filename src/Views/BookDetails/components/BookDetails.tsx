import { TBook } from "../../../Models/BooksModel";

type Props = {
  book: TBook;
};

// acting as View (UI layer that users interact with)
const BookDetails = ({ book }: Props) => {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 60,
      }}
    >
      <p style={{ fontSize: 18, margin: 0 }}>
        <strong>Title:</strong> {book.title}
      </p>
      <p style={{ fontSize: 18, margin: 0 }}>
        <strong>Number of pages:</strong> {book.pageCount}
      </p>
    </section>
  );
};

export default BookDetails;
