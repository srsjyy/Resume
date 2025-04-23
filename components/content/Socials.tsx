import Link from "next/link";
import { Github, Instagram, Facebook, Twitter } from "lucide-react";

export function Socials() {
  return (
    <div className="flex gap-4 mt-6">
      <Link href="https://www.instagram.com/gryzsg/" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-6 h-6 text-black/30 hover:text-black/75 active:scale-90 active:text-black/75 transition-transform duration-300 hover:-translate-y-1" />
      </Link>
      <Link href="https://github.com/srsjyy" target="_blank" rel="noopener noreferrer">
        <Github className="w-6 h-6 text-black/30 hover:text-black/75 active:scale-90 active:text-black/75 transition-transform duration-300 hover:-translate-y-1" />
      </Link>
      <Link href="https://x.com/srhcrnl" target="_blank" rel="noopener noreferrer">
        <Twitter className="w-6 h-6 text-black/30 hover:text-black/75 active:scale-90 active:text-black/75 transition-transform duration-300 hover:-translate-y-1" />
      </Link>
      <Link href="https://www.facebook.com/sarahgrace.cornelio" target="_blank" rel="noopener noreferrer">
        <Facebook className="w-6 h-6 text-black/30 hover:text-black/75 active:scale-90 active:text-black/75 transition-transform duration-300 hover:-translate-y-1" />
      </Link>
    </div>
  );
}