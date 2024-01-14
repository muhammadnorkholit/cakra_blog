import Link from "next/link";
import React from "react";
import menu from "./menu.json";

export default function NavMobile({ toggle }: { toggle: boolean }) {
  return (
    <div
      className={` fixed py-5 transition-custom z-50 idden block left-0 w-full h-full  ${
        toggle
          ? "top-20 dark:bg-white bg-black dark:text-black text-white"
          : "top-[-100%]"
      }`}
    >
      <ul className="flex flex-col gap-3 items-center">
        {menu.map((list, i) => {
          return (
            <li key={i}>
              <Link href={list.link}>{list.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
