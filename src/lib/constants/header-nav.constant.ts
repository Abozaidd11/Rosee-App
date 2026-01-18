import { ClipboardList, Gift, Headset, House, Info, LucideIcon, PartyPopper } from "lucide-react";

type HeaderNav = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

export const HEADER_NAV: HeaderNav[] = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Products",
    href: "/products",
    icon: Gift,
  },
  {
    label: "Categories",
    href: "/categories",
    icon: ClipboardList,
  },
  {
    label: "Occasions",
    href: "/occasions",
    icon: PartyPopper,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Headset,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
];
