import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ProgressWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  lastUpdated?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  item?: ItemWhereUniqueInput;
  privateField?: BooleanNullableFilter;
};
