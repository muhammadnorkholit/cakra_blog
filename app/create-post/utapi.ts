"use server";
import { UTApi } from "uploadthing/server";

export const deleteFile = async (path: string[] | string) => {
  let utapi = new UTApi();
  utapi.deleteFiles(path);
};
