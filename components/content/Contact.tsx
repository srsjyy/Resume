"use client"

import { cn } from "@/lib/utils";
import { ContactContent } from "./Contact/ContactContent";

export function Contact({ className }: { className?: string }) {
  return (
    <section className={cn("bg-gray-50", className)}>
      <div className="container max-w-screen-lg mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Let&apos;s get in touch!</h2>
          <p className="text-gray-600">Feel free to contact me at the following</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ContactContent />
        </div>
      </div>
    </section>
  );
}