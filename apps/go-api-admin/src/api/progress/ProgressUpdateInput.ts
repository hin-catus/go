import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type ProgressUpdateInput = {
  status?: "Option1" | null;
  lastUpdated?: Date | null;
  user?: UserWhereUniqueInput | null;
  item?: ItemWhereUniqueInput | null;
  privateField?: boolean | null;
};
