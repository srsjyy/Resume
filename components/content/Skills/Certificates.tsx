import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Certificates({ className }: { className?: string }) {
  return (
    <Card className={cn("shadow-none bg-white/20 mt-3", className)}>
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="flex items-center gap-2 text-black/95">
          <h2 className="text-lg sm:text-xl font-semibold">Certificates</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Certificate 1 */}
          <div className="space-y-2 w-full">
            <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-md overflow-hidden">
              <Image
                src="/lts.jpg"
                alt="LTS Certificate"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-black/70">
             Awarded for actively participating in a Leadership Training Seminar focused on developing effective communication, decision-making, and team-building skills.
            </p>
          </div>

          {/* Certificate 2 */}
          <div className="space-y-2 w-full">
            <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-md overflow-hidden">
              <Image
                src="/jescom.jpg"
                alt="Jescom Certificate"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-black/70">
                Granted for completing the Digital Media Workshop during Jescom Fair 2024, highlighting hands-on training in content creation, digital storytelling, and media production.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}