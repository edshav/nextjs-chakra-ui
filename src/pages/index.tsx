import { NextPage } from "next";
import Head from "next/head";
import { QueryClient } from "react-query";
import { dehydrate, DehydratedState } from "react-query/hydration";
import { Layout } from "components/Layout";
import { getPosts } from "features/posts/api/getPosts";
import { PostListView } from "features/posts/components/PostListView";
import { usePosts } from "features/posts/hooks/query/usePosts";
import { WithErrorAndLoading } from "components/WithErrorAndLoading";

export const getStaticProps = async (): Promise<{ props: { dehydratedState: DehydratedState } }> => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("posts", getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const HomePage: NextPage = () => {
  const { data, error, isLoading } = usePosts();

  const postListView = data ? <PostListView postList={data} /> : null;
  const title = "My App | Posts";

  return (
    <WithErrorAndLoading error={error} isLoading={isLoading}>
      <Layout title={title}>{postListView}</Layout>
    </WithErrorAndLoading>
  );
};

export default HomePage;
