import Image from "next/image";
import { cn } from "@/lib/utils";
import { Socials } from "./Socials";

export function HeroBanner({ className }: { className?: string }) {
  return (
    <section className={cn("bg-gray-50", className)}>
      <div className="container max-w-screen-lg mx-auto px-4">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="font-bold w-full font-sans text-4xl md:text-5xl text-black/90 leading-9 -mt-3">Hey, I&apos;m Sarah
              <span className="ml-1 inline-block origin-bottom-right animate-wave cursor-pointer">
                <Image className="" src="/waving-hand.svg" height={42} width={42} alt="wave hand" />
              </span>
            </h1>
            <p className="leading-relaxed text-black/80 font-sans">
              Welcome! I&apos;m glad you&apos;re here. Take a look around to learn more about me and the projects I&apos;ve worked on.</p>
            <div className="hidden md:block">
              <Socials />
            </div>
          </div>

          {/* Image Container */}
          <div>
            <div className="relative w-full h-full bg-gradient-to-br from-white-900 to-pink-700 rounded-xl overflow-hidden flex items-center justify-center shadow-lg">
              <Image src="/sarah-banner-image.svg" alt="Sarah Cornelio Profile" height={250}
                width={175} className="object-contain" style={{ width: "70%", height: "auto" }}
                priority
              />
            </div>
            <div className="md:hidden flex justify-center">
              <Socials />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}