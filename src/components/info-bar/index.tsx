import { Book, Headphones, Search } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";

const InfoBar = () => {
  return (
    <div className="flex justify-end gap-6 items-center p-4 w-full dark:bg-black">
      <span className="group transition-all duration-200 ease-in-out focus-within:shadow-sm focus-within:shadow-purple-500 flex items-center bg-muted px-4 rounded-full">
        <Search className="text-muted-foreground group-focus-within:text-purple-300 transition-all duration-200 ease-linear" />
        <Input
          placeholder="Quick search"
          className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </span>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Headphones />
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Support</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Book />
          </TooltipTrigger>
          <TooltipContent>
            <p>Guide</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default InfoBar;
