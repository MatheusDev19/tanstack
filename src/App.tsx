import { useGetUsers } from "./hooks/get-users/use-get-users";
import { Box, Text } from "@mantine/core";
import "./App.css";

function App() {
  const { data: users, isPending } = useGetUsers();

  return (
    <>
      <Box>
        {isPending && <Text>Carregando</Text>}
        <Text size="lg">{users?.[0].name}</Text>
        <Text size="lg">{users?.[0].age}</Text>
      </Box>
    </>
  );
}

export default App;
