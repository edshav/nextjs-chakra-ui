import { AxiosError } from "axios";
import { Post } from "features/posts/interfaces";
import { getPost } from "features/posts/api/getPost";
import { useQuery, UseQueryResult } from "react-query";

export const usePost = (postId: number): UseQueryResult<Post, AxiosError<unknown>> => {
  return useQuery<Post, AxiosError>(["post", String(postId)], () => getPost(postId), { staleTime: Infinity });
};
