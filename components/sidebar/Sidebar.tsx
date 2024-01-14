import { Book, Cat, List } from "lucide-react";
import React from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import axios from "@/lib/axios";

export default async function Sidebar() {
  let {
    data: { data },
  } = await axios("/categories");

  const IconMap = {
    Book: Icons.Book,
    // Tambahkan pemetaan lainnya sesuai dengan nama ikon dari database dan komponen ikon Lucide yang sesuai
  };
  const IconNames = Object.keys(Icons);

  return (
    <aside className="md:col-span-1 sticky top-6 left-0 place-self-start min-h-screen w-full  p-5 md:block hidden  border-r ">
      <p className="text-lg font-bold uppercase mb-2">Categories</p>
      <ul className="space-y-2 ">
        {data?.map((d: any, i: number) => {
          let Icon = Icons[d.icon];
          return (
            <li key={i}>
              <Link
                href={`/categories/${d.slug}`}
                className=" dark:text-slate-300 text-base hover:text-black dark:hover:text-white text-slate-700"
              >
                <Icon className=" side_icon" /> {d.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
