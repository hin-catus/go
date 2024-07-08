import { Category } from "../category/Category";
import { Progress } from "../progress/Progress";

export type Item = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  releaseDate: Date | null;
  category?: Category | null;
  progresses?: Array<Progress>;
  status: boolean | null;
  privateField: boolean | null;
};
