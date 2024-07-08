import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  items?: ItemListRelationFilter;
  status?: BooleanNullableFilter;
  privateField?: BooleanNullableFilter;
};
