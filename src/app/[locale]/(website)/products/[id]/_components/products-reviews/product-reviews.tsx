import { TProductDetails } from "@/lib/types/product";
import ReviewForm from "./review-form";
import Reviews from "./reviews";
import ReviewsHeader from "./reviews-header";

type ReviewsProps = {
  productDetials: SuccessfulResponse<TProductDetails>;
};

export default async function ProductReviews({ productDetials }: ReviewsProps) {
  // Variables
  const { product } = productDetials;

  return (
    <section className="space-y-4 grid grid-cols-[50px_minmax(765px,_1fr)_484px]">
      {/* Section Header */}
      <ReviewsHeader rateAvg={product?.rateAvg} rateCount={product?.rateCount} />

      {/* Section Content */}
      <Reviews />
      <ReviewForm id={product?._id} />
    </section>
  );
}
