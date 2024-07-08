import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ProgressListRelationFilter } from "../progress/ProgressListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ItemWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  releaseDate?: DateTimeNullableFilter;
  category?: CategoryWhereUniqueInput;
  progresses?: ProgressListRelationFilter;
  status?: BooleanNullableFilter;
  privateField?: BooleanNullableFilter;
};
