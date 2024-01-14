import { MenuSquare, X } from "lucide-react";
import React from "react";
import ThemeSwitcher from "../Switcher";
export default function Toggle({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: (event: boolean) => {};
}) {
  return (
    <div className="menu gap-2 flex">
      <ThemeSwitcher />

      <a
        className="md:hidden inline-block"
        onClick={() => setToggle(!toggle)}
        href="#"
      >
        {toggle ? <X /> : <MenuSquare />}
      </a>
    </div>
  );
}
