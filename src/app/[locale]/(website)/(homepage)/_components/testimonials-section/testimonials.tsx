
import { testimonialsServices } from "../../_services/testimonials.service";
import TestimonialHeader from "./testimonial-header";
import TestimonialsCarousel from "./testimonials-carousel";
import { TestimonialCardSkeleton } from "@/components/skeletons/testimonials-card-skeleton";

export default async function Testimonials() {
  // variables
  const testimonials = await testimonialsServices();

  return (
    <section className="flex flex-col gap-10 w-screen">
      {/* Sectio head */}
      <TestimonialHeader />

      {/* Section content */}
        <TestimonialsCarousel userReviews={testimonials.testimonials} />
    </section>
  );
}
