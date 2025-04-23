import { cn } from "@/lib/utils";
import { AboutMe } from "./Home/AboutMe";
import { FamilyBackground} from "./Home/FamilyBackground";

export function HomeDescription({ className }: { className?: string }) {
  return (
    <section className={cn("bg-gray-50", className)}>
      <div className="container max-w-screen-lg mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AboutMe />
        <FamilyBackground />
      </div>
      </div>
    </section>

    
  );
}