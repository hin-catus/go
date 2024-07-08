import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistUpdateInput = {
  items?: Array<"Option1">;
  user?: UserWhereUniqueInput | null;
  status?: boolean | null;
  privateField?: boolean | null;
};
