import { cn } from "@/lib/utils";
import { AcquiredSkills } from "./Skills/AcquiredSkills";
import { AttendedTrainings } from "./Skills/AttendedTrainings";
import { Certificates } from "./Skills/Certificates";
import { AcademicAchievements } from "./Skills/AcademicAchievements";

export function AboutDescription({ className }: { className?: string }) {
  return (
    <section className={cn("bg-gray-50", className)}>
      <div className="container max-w-screen-lg mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          <div className="flex flex-col h-full">
            <AcquiredSkills className="flex-grow" />
          </div>
          <div className="flex flex-col h-full">
            <AttendedTrainings className="flex-grow" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Certificates />
          <AcademicAchievements />
        </div>
      </div>
    </section>
  );
}