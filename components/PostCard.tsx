import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/moment";
type PostCardType = {
  data: {
    title: string;
    author: string;
    image: string;
    desc: string;
    slug: string;
    date: string;
  };
};

export default function PostCard({ data }: PostCardType) {
  const { title, author, image, desc, slug, date } = data;
  return (
    <Link href={"/posts/" + slug} className="block">
      <Card className="bg-slate-50/24  dark:bg-neutral-900">
        <CardContent className="p-1 flex flex-col h-full">
          <figure className="overflow-hidden rounded-xl mb-2">
            <Image
              loading="lazy"
              layout="reponsive"
              src={image || ""}
              width={200}
              height={200}
              objectFit="cover"
              className="w-full hover:scale-105 transition-custom  aspect-video object-cover object-center  rounded-xl"
              alt=""
            />
          </figure>
          <div className="p-3 flex flex-col flex-1 justify-between">
            <div className="">
              <h6 className="text-base font-bold line-clamp-2 mb-2">{title}</h6>
              <p className="line-clamp-3 mb-2 text-sm text-muted-foreground">
                {desc}
              </p>
            </div>
            <span className="text-sm">{author}</span>
            <span className="text-sm">{formatDate(date)}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
