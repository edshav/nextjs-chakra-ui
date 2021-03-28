import { Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { PostListItem } from "../api/getPosts";

type Props = {
  postList: PostListItem[];
};

export const PostListView: React.FC<Props> = ({ postList }) => {
  return (
    <Wrap p="12" justify="center">
      {postList.map(({ userId, id, title, body }) => (
        <WrapItem key={id}>
          <Flex
            h="100%"
            p="6"
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            direction="column"
            justify="space-between"
          >
            <Heading as="h2" size="md" pb="6">
              {title}
            </Heading>
            <Text isTruncated>{body}</Text>
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};
