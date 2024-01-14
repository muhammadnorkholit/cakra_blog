"use client";

import Link from "next/link";
import React, { useState } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

import Toggle from "./Toggle";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={`py-7 relative  transition-custom  ${
        toggle
          ? "dark:bg-white dark:md:text-white md:text-black dark:text-black text-white bg-black"
          : "dark:bg-black  bg-white text-black dark:text-white "
      } `}
    >
      <div className="container flex justify-between items-center">
        <Link href={"/"} className="font-bold text-3xl">
          Quizz
        </Link>
        <Toggle setToggle={setToggle} toggle={toggle} />
        <Nav />
        <NavMobile toggle={toggle} />
      </div>
    </header>
  );
}
