import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProgressListRelationFilter } from "../progress/ProgressListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  progresses?: ProgressListRelationFilter;
  wishlists?: WishlistListRelationFilter;
  status?: BooleanNullableFilter;
  privateField?: BooleanNullableFilter;
};
