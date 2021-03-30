import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { QueryClient } from "react-query";
import { dehydrate, DehydratedState } from "react-query/hydration";
import { Progress } from "components/Progress";
import { getPost } from "features/posts/api/getPost";
import { getPosts } from "features/posts/api/getPosts";
import { usePost } from "features/posts/hooks/query/usePost";
import { PostView } from "features/posts/components/PostView";

type Params = {
  postId: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getPosts();

  const paths = posts.map(post => {
    return {
      params: { postId: post.id.toString() },
    };
  });
  return { paths, fallback: true };
};

type Props = {
  postId?: string;
  dehydratedState: DehydratedState;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const postId = params?.postId;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["post", postId], () => getPost(Number(postId)));

  return {
    props: {
      postId,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const PostPage: NextPage<Props> = ({ postId }) => {
  const { data, error, isLoading } = usePost(Number(postId));

  return (
    <>
      <Head>
        <title>Post | </title>
      </Head>
      {data ? <PostView post={data} /> : null}
    </>
  );
};

export default PostPage;
