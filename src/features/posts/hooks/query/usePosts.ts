import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { PostListItem, getPosts } from "../../api/getPosts";

export const usePosts = (): UseQueryResult<PostListItem[], AxiosError<unknown>> => {
  return useQuery<PostListItem[], AxiosError>("posts", getPosts);
};
