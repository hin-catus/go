import { Item } from "../item/Item";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  items?: Array<Item>;
  status: boolean | null;
  privateField: boolean | null;
};
