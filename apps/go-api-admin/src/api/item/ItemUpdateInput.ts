import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ProgressUpdateManyWithoutItemsInput } from "./ProgressUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  title?: string | null;
  description?: string | null;
  releaseDate?: Date | null;
  category?: CategoryWhereUniqueInput | null;
  progresses?: ProgressUpdateManyWithoutItemsInput;
  status?: boolean | null;
  privateField?: boolean | null;
};
