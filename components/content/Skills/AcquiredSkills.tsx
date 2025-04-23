"use client"

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnologyData } from "@/lib/data/technology";

export function AcquiredSkills({ className }: { className?: string }) {
  // Group Categories
  const groupedTech = TechnologyData.data.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof TechnologyData.data>);

  const categories = Object.entries(groupedTech);

  return (
    <Card className={cn("shadow-none bg-white/20", className)}>
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="flex items-center gap-2 text-black/95">
          <h2 className="text-lg sm:text-xl font-semibold">Acquired Skills</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <div className="space-y-4 sm:space-y-6">
          {categories.map(([category, technologies]) => (
            <div key={category} className="space-y-2 sm:space-y-4">
              <h3 className="text-xs sm:text-sm font-medium text-black/90">{category}</h3>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {technologies.map((tech) => (
                  <span 
                    key={tech.name} 
                    className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-md border border-black/10 hover:bg-black/5 transition-colors text-center cursor-arrow"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
