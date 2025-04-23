import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FamilyBackground({ className }: { className?: string }) {
  return (
    <Card className={cn("shadow-none bg-white/20", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black/95">
          <h2 className="text-xl font-bold">Family Background</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
        I was born into a loving and wonderfully chaotic family as the 7th of 8 siblings—yes, number seven, like a lucky charm in the middle of the beautiful madness. 
        Growing up in a big household meant there was never a dull moment, and it gave me front-row seats to the ultimate masterclass in teamwork, perseverance, negotiation (over TV remotes), and empathy.
        </p>

        <p>
          Growing up in a big family taught me how to listen, collaborate, and always find creative ways to make things work.
        </p>

        <p>
        My parents are, without a doubt, my greatest inspiration. Despite life throwing them curveballs, they faced every challenge with grit, grace, and a whole lot of love. 
        They worked tirelessly to provide not just for our needs, but for our dreams—and they never complained, even when we turned the house into a mini theme park.
        </p>

        <p>
        Their quiet strength and unwavering dedication remind me every day to stay grounded, work with integrity, and approach life with gratitude. 
        They didn&apos;t just raise a creative soul—they raised someone who understands the beauty of purpose, the importance of meaningful connections, and the joy of pouring heart and soul into everything I do.
        </p>

      </CardContent>
    </Card>

  )
}
