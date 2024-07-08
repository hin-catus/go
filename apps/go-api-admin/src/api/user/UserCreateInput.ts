import { InputJsonValue } from "../../types";
import { ProgressCreateNestedManyWithoutUsersInput } from "./ProgressCreateNestedManyWithoutUsersInput";
import { WishlistCreateNestedManyWithoutUsersInput } from "./WishlistCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  progresses?: ProgressCreateNestedManyWithoutUsersInput;
  wishlists?: WishlistCreateNestedManyWithoutUsersInput;
  status?: boolean | null;
  privateField?: boolean | null;
};
