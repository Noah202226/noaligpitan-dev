"use client";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
    >
      {theme === "dark" ? (
        <LuSunMoon className="w-5 h-5 text-yellow-400" />
      ) : (
        <MdDarkMode className="w-5 h-5 text-indigo-600" />
      )}
    </button>
  );
}
