import React from "react";
import Header from "../header/Header";

export default function FrontWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
