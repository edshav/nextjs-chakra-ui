import { AxiosError } from "axios";
import { Post } from "features/posts/interfaces";
import { getPost } from "features/posts/api/getPost";
import { useQuery, UseQueryResult } from "react-query";

export const usePost = (postId: string | string[] | undefined): UseQueryResult<Post, AxiosError<unknown>> => {
  const numberId = Number(postId);
  return useQuery<Post, AxiosError>(["post", String(postId)], () => getPost(numberId), {
    staleTime: Infinity,
    enabled: !isNaN(numberId),
  });
};
