"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

const navItems = {
  "/": { name: "home" },
  "/bookshelf": { name: "bookshelf" },
  "/pondering": { name: "pondering" },
  // "/blog": { name: "blog" },
  // "/projects": { name: "projects" },
};

export function Header() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) pathname = "/blog";

  return (
    <header className="mb-10 mt-10 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="fade relative scroll-pr-6 px-0 pb-0 md:relative overflow-hidden"
            id="nav"
          >
            <div className="flex w-full flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                {Object.entries(navItems).map(([path, { name }]) => {
                  const isActive = path === pathname;
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={cn(
                        "group flex align-middle transition-colors",
                        isActive
                          ? "text-neutral-900 dark:text-neutral-100"
                          : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                      )}
                    >
                      <span className="relative px-2 py-1">
                        <span className="relative inline-block transition-transform duration-200 group-hover:scale-[1.03]">
                          {name}
                          {isActive ? (
                            <motion.div
                              layoutId="nav-underline"
                              className="
                                absolute left-0 right-0 -bottom-1
                                h-[2px] rounded-full
                                bg-white/80 dark:bg-white/60
                                shadow-[0_0_20px_rgba(255,255,255,0.9)]
                              "
                              transition={{
                                type: 'spring',
                                stiffness: 350,
                                damping: 30,
                              }}
                            />
                          ) : null}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </header>
  );
}
