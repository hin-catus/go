import { JsonValue } from "type-fest";
import { Progress } from "../progress/Progress";
import { Wishlist } from "../wishlist/Wishlist";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  progresses?: Array<Progress>;
  wishlists?: Array<Wishlist>;
  status: boolean | null;
  privateField: boolean | null;
};
