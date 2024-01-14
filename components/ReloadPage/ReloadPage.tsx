"use client";
import React from "react";
import { Button } from "../ui/button";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export default function ReloadPage({ path }: { path: string }) {
  const router = useRouter();
  const revalidate = () => {
    router.refresh();
  };
  return (
    <Button variant={"link"} onClick={revalidate}>
      ReloadPage
    </Button>
  );
}
