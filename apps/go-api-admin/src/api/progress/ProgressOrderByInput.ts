import { SortOrder } from "../../util/SortOrder";

export type ProgressOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  lastUpdated?: SortOrder;
  userId?: SortOrder;
  itemId?: SortOrder;
  privateField?: SortOrder;
};
