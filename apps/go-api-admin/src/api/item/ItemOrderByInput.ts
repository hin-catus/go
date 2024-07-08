import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  releaseDate?: SortOrder;
  categoryId?: SortOrder;
  status?: SortOrder;
  privateField?: SortOrder;
};
