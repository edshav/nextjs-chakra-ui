import { AxiosError } from "axios";
import { getPosts } from "features/posts/api/getPosts";
import { Post } from "features/posts/interfaces";
import { useQuery, UseQueryResult } from "react-query";

export const usePosts = (): UseQueryResult<Post[], AxiosError<unknown>> => {
  return useQuery<Post[], AxiosError>("posts", getPosts, { staleTime: Infinity });
};
