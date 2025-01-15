"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { menuOptions } from "@/lib/constants";
import clsx from "clsx";
import { Database, GitBranch, LucideMousePointerClick } from "lucide-react";
import TooltipArrowPrimitive from "../ui/tooltip-arrow-primitive";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { ModeToggle } from "../ui/dark-mode-toggle";

const SideBar = () => {
  const pathName = usePathname();

  return (
    <nav className="dark:bg-black h-screen overflow-scroll overflow-x-hidden justify-between flex items-center flex-col gap-10 py-6 px-2">
      <div className="flex items-center justify-center flex-col gap-8">
        <Link href={"/"} className="flex font-bold">
          autoflow.
        </Link>
        <TooltipProvider>
          {menuOptions.map(({ Component, href, name }) => (
            <ul key={name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={href}
                      className={clsx(
                        "group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                        {
                          "dark:bg-[#2F0068] bg-[#EEE0FF]": pathName === href,
                        }
                      )}
                    >
                      <Component selected={pathName === href} />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  className="dark:bg-purple-700/40 bg-purple-700/15 backdrop-blur-xl dark:text-slate-100 text-slate-900 text-muted-foreground"
                  side="right"
                  align="center"
                  sideOffset={10}
                >
                  {/* TODO: fix this */}
                  <TooltipArrowPrimitive />
                  <TooltipArrow />
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
        <Separator className="bg-slate-700" />
        <div className="flex items-center justify-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]">
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <LucideMousePointerClick className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <Database className="dark:text-white" size={18} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-8">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default SideBar;
