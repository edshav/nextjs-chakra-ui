import { Heading, Text } from "@chakra-ui/react";
import { Post } from "../interfaces";

type Props = {
  post: Post;
};

export const PostView: React.FC<Props> = ({ post }) => {
  return (
    <>
      <Heading as="h1" size="lg" pb="6" textAlign="center">
        {post.title}
      </Heading>
      <Text>{post.body}</Text>
    </>
  );
};
