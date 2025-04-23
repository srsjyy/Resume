import Link from "next/link";
import { Mail, Phone, Github, Instagram, Twitter, Facebook, MessageSquare, Clock } from "lucide-react";

export function ContactContent() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/gryzsg/",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/srsjyy",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/srhcrnl",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/sarahgrace.cornelio",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
        <div className="bg-gradient-to-br from-black/90 to-black/80 p-6 rounded-lg shadow-lg text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-medium text-lg">Email</h3>
          </div>
          <Link href="mailto:corneliosarah15@gmail.com" className="text-gray-300 hover:text-white transition-colors block mb-2">
            corneliosarah15@gmail.com
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <MessageSquare className="w-4 h-4" />
            <span>I will respond to you as promptly as possible.</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-black/90 to-black/80 p-6 rounded-lg shadow-lg text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-medium text-lg">Phone</h3>
          </div>
          <Link href="tel:+639943481743" className="text-gray-300 hover:text-white transition-colors block mb-2">
            +63 (994) 348 1743
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>I look forward to connecting with you at your convenience.</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-black/90 to-black/80 p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-white/10 rounded-lg">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-medium text-lg text-white">Connect with me</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all p-3 rounded-lg hover:bg-white/5 border border-white/10"
            >
              <div className="p-1.5 rounded-md group-hover:bg-white/10 transition-colors">
                {social.icon}
              </div>
              <span className="text-sm font-medium">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
