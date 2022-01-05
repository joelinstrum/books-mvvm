import { createResourceModel } from "./createResourceModel";

const key = "books";

const schema = {
  title: ""
};

const storeCommunications = () => "Books";

export const BooksModel = createResourceModel<TBook>(
  key,
  schema,
  storeCommunications
);

export type TBook = {
  id: string;
  title: string;
  pageCount: number;
};
