import { SocialX, SocialInstagram, SocialYoutube } from "@/assets";
import Link from "next/link";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";

const navItems = [
  { href: "/", title: "Home" },
  { href: "#who-we-are", title: "Team" },
  { href: "#what-we-offer", title: "Services" },
  { href: "#contact", title: "Contacts" },
  { href: "#", title: "FAQ" },
];

export const Footer = () => {
  return (
    <AnimatedContent
    distance={100}
    direction="vertical"
    reverse={false}
    delay={0.3}
    config={{ tension: 80, friction: 20 }}
    initialOpacity={0.2}
    animateOpacity
    scale={1.1}
    threshold={0.2}
    >
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex items-center flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <span className="font-medium">Milliark Investments</span>
          </div>
          <nav className="flex text-center flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            {navItems.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <SocialX className="text-white/40 hover:text-white transition" />
            <SocialInstagram className="text-white/40 hover:text-white transition" />
            <SocialYoutube className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
      <div className="coded-by text-center pt-12 opacity-50">
        <span className="text-xs">Coded by <Link href="https://portfolio-trotta-ee4f17bbabe0.herokuapp.com/" className=" text-yellow-600" target="_blank">Pedro Trotta</Link></span>
      </div>
    </footer>
    </AnimatedContent>
  );
};
