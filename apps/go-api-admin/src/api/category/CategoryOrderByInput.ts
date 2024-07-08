import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  privateField?: SortOrder;
};
