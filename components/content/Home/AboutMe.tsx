import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutMe({ className }: { className?: string }) {
  return (
    <Card className={cn("shadow-none bg-white/20", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black/95">
          <h2 className="text-xl font-bold">About me</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Hi there, I&apos;m <span className="whitespace-nowrap border w-max border-[#EBEBEB] text-[13px] rounded-[0.375rem] py-[3px] px-[5px]">Sarah</span>. I enjoy designing and finding simple ways to make things look and work better.
        </p>

        <p>
        I love creating visual content that communicates clearly, inspires emotion, and brings ideas to life. From branding and layout design to social media graphics and promotional materials, I bring a thoughtful and artistic approach to every project.
        </p>

        <p>
        My creativity extends beyond design—I am also passionate about photography, videography, video editing, and music. 
        I love it even more when I get to use these talents by serving in my church, where I am a member of the Social Communications Ministry. These creative outlets allow me to explore different ways of telling stories and expressing meaning through visuals and sound. 
        Whether I am behind the camera or working on post-production, I find joy in turning raw moments into polished, impactful visuals.
        </p>

        <p>
        I believe design is more than just making things look good—it is about solving problems, evoking emotions, and creating experiences that connect with people.
        I am always seeking new challenges and opportunities to grow, and I pour passion and intention into everything I create.
        </p>

      </CardContent>
    </Card>

  )
}
