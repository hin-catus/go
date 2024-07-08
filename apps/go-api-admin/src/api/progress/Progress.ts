import { User } from "../user/User";
import { Item } from "../item/Item";

export type Progress = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  lastUpdated: Date | null;
  user?: User | null;
  item?: Item | null;
  privateField: boolean | null;
};
