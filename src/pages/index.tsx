import { NextPage } from "next";
import Head from "next/head";
import { QueryClient } from "react-query";
import { dehydrate, DehydratedState } from "react-query/hydration";
import { Heading } from "@chakra-ui/react";
import { getPosts } from "features/posts/api/getPosts";
import { PostListView } from "features/posts/components/PostListView";
import { usePosts } from "features/posts/hooks/query/usePosts";
import { Progress } from "components/Progress";

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
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>

      <div>
        <Heading as="h1" size="lg" pb="6" textAlign="center">
          Posts
        </Heading>
        {error ? <Heading>{error.message}</Heading> : null}
        {isLoading ? <Progress /> : null}
        {data ? <PostListView postList={data} /> : null}
      </div>
    </>
  );
};

export default HomePage;
