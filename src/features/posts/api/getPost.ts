import { jsonPlaceholderApi } from "jsonPlaceholderApi";
import { Post } from "../interfaces";

export const getPost = async (postId: number): Promise<Post> => {
  console.log(`${postId} - start`);
  // await new Promise(resolve => setTimeout(resolve, 200));
  const { data } = await jsonPlaceholderApi.get<Post>(`/posts/${postId}`);
  console.log(`${postId} - finish`);
  return data;
};
