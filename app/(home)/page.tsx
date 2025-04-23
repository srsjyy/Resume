import { HeroBanner } from "@/components/content/HeroBanner";
import { HomeDescription } from "@/components/content/HomeDescription";

export default function Home() {
  return (
    <>
      <HeroBanner className="pt-32 pb-10 md:pb-24 md:pt-40" />
      <HomeDescription className="pb-20" />
    </>
  );
}