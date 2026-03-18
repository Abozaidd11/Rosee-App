import { TCategory } from "./category";
import { TOccasion } from "./occasion";
import { TProduct } from "./product";

type TDashboardProduct = Pick<
  TProduct,
  "_id" | "title" | "rateAvg" | "price" | "sold" | "quantity" | "rateCount"
>;
type TDashboardCategory = Pick<TCategory, "_id" | "name" | "productsCount">;
type TDashboardOccasion = Pick<TOccasion, "_id" | "name" | "productsCount">;
