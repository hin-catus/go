import { ItemCreateNestedManyWithoutCategoriesInput } from "./ItemCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  description?: string | null;
  items?: ItemCreateNestedManyWithoutCategoriesInput;
  status?: boolean | null;
  privateField?: boolean | null;
};
