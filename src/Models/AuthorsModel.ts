import { createResourceModel } from "./createResourceModel";

const key = "authors";

const schema = {
  id: "",
  firstName: "",
  lastName: "",
  bookId: ""
};

const storeCommunications = () => "Authors";

export const AuthorsModel = createResourceModel<TAuthor>(
  key,
  schema,
  storeCommunications
);

export type TAuthor = {
  id: string;
  firstName: string;
  lastName: string;
  bookId: string;
  pageCount: number;
};
