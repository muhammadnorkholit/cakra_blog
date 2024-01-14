import SubmitButton from "@/components/SubmitButton";
import FrontWrapper from "@/components/layouts/FrontWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import FormInput from "./FormInput";
import axios from "@/lib/axios";
import { redirect, useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
const getCategories = async () => {
  let {
    data: { data },
  } = await axios("/categories");
  return data;
};
export default async function CreatePost() {
  let categories = await getCategories();
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    console.log(data);

    let res = await axios.post("/posts", data);
    revalidatePath("/");
    redirect("/");
  };
  return (
    <FrontWrapper>
      <div className="container">
        <h1 className="text-2xl font-bold mb-5">Create New Post</h1>
        <Card>
          <CardContent className="p-4">
            <form action={handleSubmit}>
              <FormInput categories={categories} />
              <SubmitButton path="/">Post</SubmitButton>
            </form>
          </CardContent>
        </Card>
      </div>
    </FrontWrapper>
  );
}
