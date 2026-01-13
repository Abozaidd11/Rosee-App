import { FOOTER_NAV } from "@/lib/constants/footer-nav.constant";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 dark:bg-zinc-900 py-10 font-sarabunMedium">
      <div className="flex justify-center flex-wrap container mx-auto">
        {/* logo */}
        <div className="flex flex-col items-center gap-4 w-1/2 md:w-1/3 lg:w-1/4 p-3 md:p-0">
          <div className="flex items-center gap-2">
            <Link href="/" className="cursor-pointer">
              <Image src="/assets/logo.png" alt="Logo" width={240} height={225} />
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-softPink-300 text-lg">Rose E-Commerce App</p>
            <p className="text-zinc-50 text-sm">
              &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
        {/* policies */}
        <div className="flex flex-col gap-4 w-1/2 md:w-1/3 lg:w-1/2 p-3 md:p-0">
          <p className="text-softPink-300 text-lg">Discover our website</p>
          <ul className="flex flex-col gap-2">
            {FOOTER_NAV.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-zinc-50">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* newsletter */}
        <div className="flex flex-col gap-4 items-center md:items-start p-3 md:p-0 w-full md:w-1/3 lg:w-1/4">
          <p className="text-softPink-300 text-lg">
            Get <span className="text-white">20%</span> Off Discount Coupon
          </p>
          <p className="text-muted text-sm">By subscribing to our newsletter</p>
          {/* subscripe */}
          <div className="flex gap-2 relative w-full">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border-0 bg-zinc-600 dark:bg-zinc-800 text-zinc-50 rounded-3xl"
            />
            <Button
              variant={"secondary"}
              type="submit"
              className="absolute right-0 h-full rounded-3xl"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
