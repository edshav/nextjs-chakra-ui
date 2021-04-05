import Head from "next/head";
import { Container } from "@chakra-ui/react";

type Props = {
  title: string;
};

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container maxW="container.xl" py={8}>
        {children}
      </Container>
    </>
  );
};
