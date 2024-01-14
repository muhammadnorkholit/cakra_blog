"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  SelectLabel,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UploadDropzone } from "@/utils/uploadthing";
import React, { useEffect, useState } from "react";
import { deleteFile } from "./utapi";
import Image from "next/image";

export default function FormInput({ categories }: { categories: any }) {
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState({ key: "", url: "" });
  const [prevImage, setPrevImage] = useState({ key: "", url: "" });

  useEffect(() => {
    (async () => {
      if (prevImage.url != "") await deleteFile(prevImage.key);
      setPrevImage(image);
    })();
  }, [image]);

  const generateUniqueSlug = (e: any) => {
    let title = e.target.value;
    if (title == "") return setSlug("");
    const slugified = title.toLowerCase().replace(/[^a-z0-9-]+/g, "-");
    const uniqueSlug = `${slugified}-(${Math.random()
      .toString(36)
      .substring(2, 7)})`;
    setSlug(uniqueSlug);
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1  gap-2">
      <div className="group mb-2 md:col-span-2 col-span-1">
        <Label className="mb-3 inline-block" htmlFor="">
          Image
        </Label>
        <Input
          required
          type="hidden"
          name="imageUrl"
          value={image.url}
          placeholder="Max description 100 character"
          id=""
        />
        <Input
          required
          type="hidden"
          name="imageKey"
          value={image.key}
          placeholder="Max description 100 character"
          id=""
        />
        <div
          className={`${image.url !== "" && "grid md:grid-cols-2 grid-cols-1"}`}
        >
          {image.url !== "" && (
            <Image
              src={image.url}
              width={200}
              height={200}
              alt="preview"
              layout="responsive"
            />
          )}
          <UploadDropzone
            className=" mt-2"
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImage({ url: res[0].url, key: res[0].key });
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </div>
      <div className="group mb-2">
        <Label className="mb-3 inline-block" htmlFor="">
          Title
        </Label>
        <Input
          required
          onKeyUp={generateUniqueSlug}
          type="text"
          name="title"
          placeholder="title"
          id=""
        />
      </div>
      <div className="group mb-2">
        <Label className="mb-3 inline-block" htmlFor="">
          Slug
        </Label>
        <Input
          required
          value={slug}
          type="text"
          name="slug"
          placeholder="slug"
          readOnly
          id=""
        />
      </div>
      <div className="group mb-2">
        <Label className="mb-3 inline-block" htmlFor="">
          Description
        </Label>
        <Input
          required
          type="text"
          name="desc"
          maxLength={100}
          placeholder="Max description 100 character"
          id=""
        />
      </div>

      <div className="group mb-2">
        <Label className="mb-3 inline-block" htmlFor="">
          Categori
        </Label>
        <Select required name="categori_id">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              {categories.map((category: any, i: number) => {
                return (
                  <SelectItem key={i} value={category._id}>
                    {category.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="group mb-2 md:col-span-2">
        <Label className="mb-3 inline-block" htmlFor="">
          Content
        </Label>

        <Textarea
          required
          rows={9}
          name="content"
          placeholder="Content"
        ></Textarea>
      </div>
    </div>
  );
}
