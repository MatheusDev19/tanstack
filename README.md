# Forma normal 

```js
import { Box, Text } from "@mantine/core";
import "./App.css";
import { useEffect } from "react";

function App() {
  async function getData() {
    const url = "http://localhost:3000/posts";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box>
        <Text size="lg">Welcome to Mantine + Vite + React + TS!</Text>
      </Box>
    </>
  );
}

export default App;
```

# Forma com TanStack

