import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export interface Props {
  className?: string;
  href: string;
  icon: React.ElementType;
  children?: React.ReactNode;
}

export function SocialLink({ className, href, children, icon: Icon }: Props) {
  return (
    <div
      className={cn(
        className,
        "flex items-center justify-center rounded-xl",
        "transition-all duration-300 ease-out",
        "hover:scale-[1.1] hover:-translate-y-[2px]",
        "hover:shadow-[0_0_90px_rgba(255,255,255,0.55)] dark:hover:shadow-[0_0_90px_rgba(255,255,255,0.4)]",
        "hover:brightness-[1.12]"
      )}
    >
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium transition-all duration-300 ease-out"
      >
        <Icon
          className="h-6 w-6 flex-none fill-zinc-500 transition-transform duration-300 group-hover:scale-125 group-hover:fill-white"
        />
        {children && <span className="ml-4">{children}</span>}
      </Link>
    </div>
  );
}
