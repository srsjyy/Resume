"use client"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function ProjectListing({ className }: { className?: string }) {
  const projects = [
    {
      title: "Portfolio",
      description: "A curated collection of my works in design, photography, and digital media—showcasing creativity, technical skills, and a passion for visual storytelling.",
      image: "/portfolio.JPG",
      link: "https://srhcrnl.vercel.app/",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Online Checklist",
      description: "A digital tracker designed to help students monitor their academic progress, keep tabs on subject grades, and stay organized throughout the semester.",
      image: "/checklist.JPG",
      link: "https://github.com/srsjyy/Checklist.git",
      tags: ["PHP", "CSS", "HTML"]
    },
    {
      title: "E-Commerce: Comfee",
      description: "An online store specializing in premium coffee products, offering a cozy selection of brews, beans, and coffee essentials crafted for comfort and daily delight.",
      image: "/comfee.jpg",
      link: "https://github.com/raceczn/comfee_app.git",
      tags: ["Java", "Figma"]
    }
  ];

  const mediaWorks = [
    {
      title: "Online Gallery",
      description: "A visual showcase of moments captured through church photography, reflecting faith, community, and devotion.",
      image: "/photography.JPG",
      link: "https://sarsphotog.pixieset.com/" 
    },
    {
      title: "Video Editing",
      description: "A showcase of church-related trailers and music videos—designed to inspire, engage, and uplift through visual storytelling.",
      image: "/ytchannel.JPG",
      link: "https://www.youtube.com/@sarahgracecornelio8625" 
    }
  ];

  return (
    <section className={cn("bg-gray-50", className)}>
      <div className="container max-w-screen-lg mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-black/90 mb-4">My Projects</h2>
          <p className="text-black/75 leading-relaxed">
            A collection of my works reflecting creativity and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.map((project, index) => (
            <div key={index} className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black/90 mb-2">{project.title}</h3>
                <p className="text-black/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-xs rounded-full text-black/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={project.link} 
                  target="_blank"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Second row - 2 wider media cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mediaWorks.map((work, index) => (
            <div key={index} className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-black/90 mb-3">{work.title}</h3>
                <p className="text-black/70 mb-5 text-lg">{work.description}</p>
                <Link 
                  href={work.link} 
                  target="_blank"
                  className="inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Visit {work.title.includes("YouTube") ? "Channel" : "Gallery"}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}