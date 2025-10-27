"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggler() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: only render the icon after we've mounted on the client
  useEffect(() => setMounted(true), []);

  // If user selected 'system', prefer the resolved theme
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => {
        if (currentTheme === "dark") {
          setTheme("light");
          return;
        }
        setTheme("dark");
      }}
      className="rounded-xs rounded p-1 hover:bg-gray-200 hover:dark:bg-[#313131]"
    >
      {mounted ? (
        currentTheme === "dark" ? (
          <span className="sun-icon">
            <SunIcon height={25} width={25} />
          </span>
        ) : (
          <span className="moon-icon">
            <MoonIcon height={25} width={25} />
          </span>
        )
      ) : (
        // Placeholder to avoid layout shift / mismatch before hydration
        <span className="w-[25px] h-[25px] inline-block" />
      )}
    </button>
  );
}
