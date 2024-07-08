import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishlistCreateInput = {
  items?: Array<"Option1">;
  user?: UserWhereUniqueInput | null;
  status?: boolean | null;
  privateField?: boolean | null;
};
