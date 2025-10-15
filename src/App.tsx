import { Box, Text } from "@mantine/core";
import "./App.css";
import { useGetUsers } from "./hooks/get-users/use-get-users";

function App() {
  const { data, isPending } = useGetUsers();

  return (
    <>
      <Box>
        {isPending && <Text>Carregando</Text>}
        <Text size="lg">{data?.[0].name}</Text>
        <Text size="lg">{data?.[0].age}</Text>
      </Box>
    </>
  );
}

export default App;
