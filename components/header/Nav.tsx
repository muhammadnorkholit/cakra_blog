import Link from "next/link";
import React from "react";
import menu from "./menu.json";
export default function Nav() {
  return (
    <ul className="gap-3 md:flex hidden">
      {menu.map((list, i) => {
        return (
          <li key={i}>
            <Link href={list.link}>{list.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
