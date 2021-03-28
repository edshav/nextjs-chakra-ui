import { jsonPlaceholderApi } from 'api/jsonPlaceholderApi';

export type PostListItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPosts = async (): Promise<PostListItem[]> => {
  const { data } = await jsonPlaceholderApi.get<PostListItem[]>('/posts');
  return data;
};
