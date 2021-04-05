import { Progress as ChakraProgress, Text } from "@chakra-ui/react";
import { AxiosError } from "axios";

type Props = {
  error: AxiosError<unknown> | null;
  isLoading: boolean;
};

export const WithErrorAndLoading: React.FC<Props> = ({ error, isLoading, children }) => {
  if (isLoading) return <ChakraProgress size="xs" isIndeterminate />;
  if (error) return <Text>{error.message}</Text>;
  return <>{children}</>;
};
