import Link from "next/link";
import { Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Post } from "../interfaces";

type Props = {
  postList: Post[];
};

export const PostListView: React.FC<Props> = ({ postList }) => {
  return (
    <>
      <Heading as="h1" size="lg" pb="6" textAlign="center">
        Posts
      </Heading>
      <Wrap justify="center">
        {postList.map(({ id, title, body }) => (
          <WrapItem key={id} cursor="pointer">
            <Link href={`/post/${encodeURIComponent(id)}`} prefetch={false} passHref>
              <Flex
                h="100%"
                p="6"
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                direction="column"
                justify="space-between"
                as="a"
              >
                <Heading as="h2" size="md" pb="6">
                  {title}
                </Heading>
                <Text isTruncated>{body}</Text>
              </Flex>
            </Link>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};
