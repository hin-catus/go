import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ProgressCreateNestedManyWithoutItemsInput } from "./ProgressCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  title?: string | null;
  description?: string | null;
  releaseDate?: Date | null;
  category?: CategoryWhereUniqueInput | null;
  progresses?: ProgressCreateNestedManyWithoutItemsInput;
  status?: boolean | null;
  privateField?: boolean | null;
};
