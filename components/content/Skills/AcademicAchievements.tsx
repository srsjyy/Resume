import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AcademicAchievements({ className }: { className?: string }) {
  return (
    <Card className={cn("shadow-none bg-white/20 mt-3", className)}>
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="flex items-center gap-2 text-black/95">
          <h2 className="text-lg sm:text-xl font-semibold">Academic Achievements</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Certificate 1 */}
          <div className="space-y-2 w-full">
            <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-md overflow-hidden">
              <Image
                src="/shs.jpg"
                alt="SHS Certificate"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-black/70">
            Awarded 2nd Honorable Mention during Senior High School, reflecting consistent academic excellence and exemplary student conduct.
            </p>
          </div>

          {/* Certificate 2 */}
          <div className="space-y-2 w-full">
            <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-md overflow-hidden">
              <Image
                src="/vplister.jpg"
                alt="VP Lister Certificate"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-black/70">
            Recognized for outstanding academic performance during the 1st Semester of S.Y. 2023-2024, earning a place on the Vice President’s List for scholastic excellence and dedication.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}