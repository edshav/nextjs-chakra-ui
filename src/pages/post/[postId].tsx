import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { QueryClient } from "react-query";
import { dehydrate, DehydratedState } from "react-query/hydration";
import { WithErrorAndLoading } from "components/WithErrorAndLoading";
import { Layout } from "components/Layout";
import { getPost } from "features/posts/api/getPost";
import { getPosts } from "features/posts/api/getPosts";
import { usePost } from "features/posts/hooks/query/usePost";
import { PostView } from "features/posts/components/PostView";

type Params = {
  postId: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getPosts();
  const paths = posts.slice(0, 2).map(post => {
    return {
      params: { postId: String(post.id) },
    };
  });
  return { paths, fallback: true };
};

type Props = {
  dehydratedState: DehydratedState;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const postId = params?.postId;
  const queryClient = new QueryClient();
  const numberId = Number(postId);

  if (!isNaN(numberId)) {
    await queryClient.prefetchQuery(["post", postId], () => getPost(numberId));
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const PostPage: NextPage<Props> = () => {
  const {
    query: { postId },
  } = useRouter();

  console.log({ postId });

  const { data, error, isLoading } = usePost(postId);

  const postView = data ? <PostView post={data} /> : null;
  const title = data ? `My App | ${data.title}` : "My App";

  return (
    <WithErrorAndLoading error={error} isLoading={isLoading}>
      <Layout title={title}>{postView}</Layout>
    </WithErrorAndLoading>
  );
};

export default PostPage;
