import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type WishlistWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  status?: BooleanNullableFilter;
  privateField?: BooleanNullableFilter;
};
