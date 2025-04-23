"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AttendedTrainings({ className }: { className?: string }) {
  const trainings = [
    {
      title: "Graphic Design: Lay Outing and Style Guide",
      description: "A hands-on workshop focused on the fundamentals of layout design and creating cohesive style guides for effective visual communication."
    },
    {
      title: "Social Communication 101: Understanding Responsibilities, Navigating Challenges, and Embracing Opportunities",
      description: "An introductory course exploring the key roles and responsibilities in social communication, with strategies for overcoming obstacles and maximizing impact."
    },
    {
      title: "Jescom Fair 2024 Digital Media Workshop",
      description: "A creative session during the Jescom Fair that dives into digital content creation, media production tools, and storytelling in the digital age."
    },
    {
      title: "Leadership and Mental, Physical, and Spiritual Health Awareness: Fostering a Healthy and Productive Work Environment",
      description: "A seminar promoting holistic wellness among leaders, emphasizing the importance of balance for sustainable productivity and positive workplace culture."
    },
    {
      title: "Leadership Training Seminar: “But among you it will be different. Whoever wants to be a leader among you must be your servant.” (Mt. 20:26)",
      description: "A values-driven leadership seminar inspired by servant leadership, encouraging humility, empathy, and purpose-driven guidance in any setting."
    }
  ];

  return (
    <Card className={cn("shadow-none bg-white/20", className)}>
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="flex items-center gap-2 text-black/95">
          <h2 className="text-lg sm:text-xl font-semibold">Attended Trainings and Seminars</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <div className="space-y-4 sm:space-y-6">
          {trainings.map((training, index) => (
            <div key={index} className="space-y-1.5">
              <h3 className="text-sm font-semibold text-black">{training.title}</h3>
              <p className="text-xs text-black/70">{training.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
