import { SortOrder } from "../../util/SortOrder";

export type WishlistOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  items?: SortOrder;
  userId?: SortOrder;
  status?: SortOrder;
  privateField?: SortOrder;
};
