import { jsonPlaceholderApi } from "jsonPlaceholderApi";
import { Post } from "../interfaces";

export const getPost = async (postId: number): Promise<Post> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const { data } = await jsonPlaceholderApi.get<Post>(`/posts/${postId}`);
  console.log(postId);
  return data;
};
