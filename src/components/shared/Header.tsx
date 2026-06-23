import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Header() {
  const navLinkStyle =
    "text-sm font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 outline-none";

  return (
    <header className="sticky top-2 z-50 mx-auto w-[calc(100%-1rem)] max-w-7xl rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="flex h-14 items-center justify-between px-6 w-full">

        {/* Left Side: Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <Image
            className="dark:invert"
            src="/IASLOGO.png"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </div>

        {/* Center: Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="gap-6">

            {/* Gallery Link */}
            <NavigationMenuItem>
              <NavigationMenuLink href="/gallery" className={navLinkStyle}>
                Gallery
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* About Us Link */}
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className={navLinkStyle}>
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side: Contact Us Button */}
        <a
          href="/contact"
          className="group flex items-center gap-2 rounded-full bg-black px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-sm"
        >
          <span>Contact Us</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:scale-110"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>

      </div>
    </header>
  );
}