import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BestSellingHeading() {
  return (
    <section className="flex flex-col justify-between max-w-80">
      {/* Headline  */}
      <div className="flex flex-col gap-2">
        {/* Text  */}
        {/* soft-pink-500 - text-maroon-500 */}
        <p className="font-bold text-pink-500 dark:text-[#D75458] dark:text-maroon-500 uppercase tracking-[.25em]">
          best Selling
        </p>

        {/* soft-pink-500 */}
        <div className="font-bold dark:text-[#FFC2D0] dark:text-soft-pink-200 text-3xl leading-none">
          <span className="text-pink-500 text-soft-pink-500 dark:text-[#D75458] dark:text-maroon-500">
            Check Out
          </span>
          What Everyone’s
          <span className="text-pink-500 text-soft-pink-500 dark:text-[#D75458] dark:text-maroon-500">
            Buying
          </span>
          Right Now
        </div>

        <p className="pb-16 text-zinc-500 dark:text-zinc-400 leading-tight">
          Not sure what to choose? <br />
          Start with our best sellers, these are the gifts our customers keep coming back for.
          Whether you&apos;re celebrating a birthday, anniversary or wedding, our top picks are
          guaranteed to leave a lasting impression.
        </p>
      </div>

      {/* Button  */}
      {/* text-maroon-600 - bg-soft-pink-200 - design system button */}
      <Link
        href="/products"
        className="flex items-center gap-3 bg-[#A6252A] bg-maroon-600 dark:bg-[#FFC2D0] dark:bg-soft-pink-200 px-4 py-2 rounded-xl w-fit text-white dark:text-zinc-800"
      >
        Explore gifts <ArrowRight className="size-4" strokeWidth={1.46} />
      </Link>
    </section>
  );
}
