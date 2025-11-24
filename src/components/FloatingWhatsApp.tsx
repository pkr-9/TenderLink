// src/components/FloatingWhatsApp.tsx

import { MessageCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://wa.me/917774911330" // Phone number from
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
              aria-label="Chat on WhatsApp"
            >
              {/* Pulse Effect */}
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20 duration-1000 group-hover:duration-500"></span>

              {/* Icon */}
              <MessageCircle className="relative h-7 w-7 fill-white text-white" />
            </a>
          </TooltipTrigger>
          <TooltipContent
            side="left"
            className="bg-card text-foreground border-border font-medium mr-2"
          >
            <p>Chat with us on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
