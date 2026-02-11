import { addReviewAction } from "@/lib/actions/reviews.action";
import { TReviewFields } from "@/lib/types/reviews";
import { useMutation } from "@tanstack/react-query";
import { checkToken } from "@/lib/utils/check-token";

export default function useAddReview() {
  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fields: TReviewFields & { productId: string }) => {
      // Get token from sessionStorage or cookies
      const token = checkToken();

      const payload = await addReviewAction(
        {
          product: fields.productId,
          rating: fields.rating,
          title: fields.title,
          comment: fields.comment,
        },
        token
      );

      if ("error" in payload) {
        throw new Error(payload.error);
      }

      return payload;
    },
  });

  return { isPending, error, addReview: mutate };
}
