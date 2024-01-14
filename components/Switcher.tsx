"use client";
import { Moon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

const Switcher = () => {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme == "light" ? "dark" : "light";
  return (
    <a className="flex gap-2" href="#" onClick={() => setTheme(nextTheme)}>
      {theme == "light" ? <SunMoon /> : <Moon />}{" "}
      <span className="md:inline-block hidden capitalize"> {theme}</span>
    </a>
  );
};

export default Switcher;
