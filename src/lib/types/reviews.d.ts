import z from "zod";
import { reviewSchema } from "../schemes/reviews.schema";

export type TReview = {
  _id: string;
  product: {
    _id: string;
    title: string;
    imgCover: string;
    id: string;
  };
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    photo: string;
  };
  rating: number;
  title: string;
  comment: string;
  status: string;
  createdAt: Date;
  updatedAt: string;
};

export type TReviews = {
  reviews: TReview[];
};

export type TReviewFields = z.infer<ReturnType<typeof reviewSchema>>;
