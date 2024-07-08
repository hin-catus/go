import { User } from "../user/User";

export type Wishlist = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  items?: Array<"Option1">;
  user?: User | null;
  status: boolean | null;
  privateField: boolean | null;
};
