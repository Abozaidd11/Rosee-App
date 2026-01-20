import { Star } from "lucide-react";

type RatingProps = {
  avgRate: number;
};

export default function RatingStars({ avgRate }: RatingProps) {
  return (
    <div className="flex justify-center items-center gap-1 w-full text-[#FBA707]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star size={17} key={index} fill={`${avgRate <= index ? "#ffffff" : "#FBA707"}`} />
      ))}
    </div>
  );
}
