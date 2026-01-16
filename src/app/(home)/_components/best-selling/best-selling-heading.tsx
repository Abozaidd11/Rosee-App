import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BestSellingHeading() {
  return (
    <section className="flex flex-col justify-between max-w-80">
      {/* Headline  */}
      <div className="flex flex-col gap-2">
        {/* Text  */}
        {/* soft-pink-500 - text-maroon-500 */}
        <p className="font-bold uppercase text-pink-500 tracking-[.25em] dark:text-maroon-500 dark:text-[#D75458]">
          best Selling
        </p>

        {/* soft-pink-500 */}
        <div className="text-3xl leading-none font-bold  dark:text-soft-pink-200 dark:text-[#FFC2D0] ">
          <span className=" text-soft-pink-500 text-pink-500 dark:text-maroon-500 dark:text-[#D75458]">
            Check Out
          </span>
          What Everyone’s
          <span className=" text-soft-pink-500 text-pink-500 dark:text-maroon-500 dark:text-[#D75458]">
            Buying
          </span>
          Right Now
        </div>

        <p className="text-zinc-500 leading-tight pb-16 dark:text-zinc-400">
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
        className="bg-maroon-600 bg-[#A6252A] dark:bg-soft-pink-200 dark:bg-[#FFC2D0] rounded-xl px-4 py-2 text-white dark:text-zinc-800 flex w-fit items-center gap-3"
      >
        Explore gifts <ArrowRight className="size-4" strokeWidth={1.46} />
      </Link>
    </section>
  );
}
