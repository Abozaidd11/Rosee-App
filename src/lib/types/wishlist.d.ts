import { TProductCard } from "./product";

export type TWishlistProduct = {
  _id: string;
  title: string;
  imgCover: string;
  price: number;
  priceAfterDiscount: number;
  rateAvg: number;
  id: string;
};

export type TWishlist = {
  _id: string;
  user: string;
  products: TProductCard[];
};
