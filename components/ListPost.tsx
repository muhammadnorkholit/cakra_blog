import React from "react";
import Sidebar from "./sidebar/Sidebar";
import PostCard from "./PostCard";

export default function ListPost({
  articles,
  title,
}: {
  articles: any;
  title: string;
}) {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
      <Sidebar />
      <div className="md:col-span-3 container">
        <h1 className="text-4xl mb-4 font-bold">{title}</h1>
        {articles?.length == 0 && <div>post not found</div>}
        <div className="grid gap-6  md:grid-cols-3 sm:grid-cols-2  grid-cols-1">
          {articles?.map((article: any, i: number) => {
            return (
              <PostCard
                key={i}
                data={{
                  title: article.title,
                  author: article.author,
                  desc: article.desc,
                  image: article.imageUrl,
                  slug: article.slug,
                  date: article.createdAt,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
