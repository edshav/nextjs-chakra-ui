import { NextPage } from 'next';
import Head from 'next/head';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Button, Menu, MenuButton, MenuItem, MenuList, Textarea } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { getPosts } from 'api/endpoints/getPosts';

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('posts', getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const HomePage: NextPage = () => {
  const { data } = useQuery('posts', getPosts);
  console.log(data?.[0]);
  return (
    <>
      <Head>
        <title>My App</title>
      </Head>

      <div>
        HomePage
        <Textarea rows={1} />
        <Menu closeOnBlur>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                {isOpen ? 'Close' : 'Open'}
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </div>
    </>
  );
};

export default HomePage;
