import { jsonPlaceholderApi } from "jsonPlaceholderApi";
import { Post } from "../interfaces";

export const getPosts = async (): Promise<Post[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const { data } = await jsonPlaceholderApi.get<Post[]>("/posts");
  return data;
};
