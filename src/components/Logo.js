import Image from "next/image";
import { site } from "@/lib/site";

export default function Logo({ className = "", tone = "light" }) {
  const text = tone === "light" ? "text-white" : "text-navy-950";
  return (
    <a href="#home" aria-label={`${site.name} — home`} className={`group flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-mark.png"
        alt=""
        width={442}
        height={384}
        priority
        className="h-9 w-auto transition-transform duration-500 group-hover:rotate-[8deg]"
      />
      <span className={`font-display leading-[0.95] ${text}`}>
        <span className="block text-[1.05rem] font-extrabold tracking-tight">Thrive</span>
        <span className="block text-[0.95rem] font-light tracking-wide">Digital</span>
      </span>
    </a>
  );
}
