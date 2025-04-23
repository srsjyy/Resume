import{ Instagram, Github, Twitter, Facebook, MapPin } from "lucide-react";

export const NavigationData = {
  navbar: {
    data: [
      { label: "Introduction", path: "/" },
      { label: "Skills", path: "/skills" },
      { label: "Projects", path: "/projects" },
      { label: "Challenges & Learnings", path: "/challenges" },
      { label: "Future Plans", path: "/plans" },
      { label: "Resume", path: "/resume" },
      { label: "Contact", path: "/contact" },
    ]
  },
  footer: {
    data: [
      {
        "title": "Sarah Cornelio",
        "description": "@srhcrnl",
        "location": {
          "label": "Manila, Philippines",
          "icon": <MapPin className="inline text-emerald-700" size={16} />
        }
      },
      {
        "title": "Pages",
        "links": [
          { "label": "Introduction", "href": "/" },
          { "label": "Skills", "href": "/skills" },
          { "label": "Projects", "href": "/projects" },
          { "label": "Challenges & Learnings", "href": "/challenges" },
          { "label": "Future Plans", "href": "/plans" },
          { "label": "Resume", "href": "/resume" },
          { "label": "Contact", "href": "/contact" },
        ]
      },
      {
        "title": "Resources",
        "links": [
          { label: "GitHub", href: "https://github.com" },
        ]
      },
      {
        "title": "Connect",
        "links": [
          { label: "Instagram", href: "https://www.instagram.com/gryzsg", icon: <Instagram className="size-3" /> },
          { label: "GitHub", href: "https://github.com/srsjyy", icon: <Github className="size-3" /> },
          { label: "Twitter", href: "https://x.com/srhcrnl", icon: <Twitter className="size-3" /> },
          { label: "Facebook", href: "https://www.facebook.com/sarahgrace.cornelio", icon: <Facebook className="size-3" /> },
        ]
      }
    ]
  }
}