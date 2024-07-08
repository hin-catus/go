import { InputJsonValue } from "../../types";
import { ProgressUpdateManyWithoutUsersInput } from "./ProgressUpdateManyWithoutUsersInput";
import { WishlistUpdateManyWithoutUsersInput } from "./WishlistUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  progresses?: ProgressUpdateManyWithoutUsersInput;
  wishlists?: WishlistUpdateManyWithoutUsersInput;
  status?: boolean | null;
  privateField?: boolean | null;
};
