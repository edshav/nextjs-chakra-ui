import { NextPage } from 'next';
import Head from 'next/head';
import { Button, CircularProgress, Menu, MenuButton, MenuItem, MenuList, Textarea } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>My App</title>
      </Head>

      <div>
        HomePage
        <Textarea rows={1} />
        <CircularProgress isIndeterminate />
        <Menu closeOnBlur >
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
