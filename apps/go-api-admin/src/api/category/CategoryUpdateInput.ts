import { ItemUpdateManyWithoutCategoriesInput } from "./ItemUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  description?: string | null;
  items?: ItemUpdateManyWithoutCategoriesInput;
  status?: boolean | null;
  privateField?: boolean | null;
};
