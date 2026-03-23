import { Box, Flex, Heading } from "@radix-ui/themes";
import { CreateTaskForm } from "./Components/CreateTaskForm";
import { TaskBoard } from "./Components/TaskBoard";

function App() {
  return (
    <Box maxWidth="80rem" mx="auto">
      <Box height="4rem">
        <Flex align="center" height="100%" gap="4" justify="between">
          <Heading as="h1" size="8" weight="light">
            React Kanban
          </Heading>
          <CreateTaskForm />
        </Flex>
      </Box>
      <Box>
        <Heading as="h2" mb="4">
          Quadro de tarefas
        </Heading>
        <TaskBoard />
      </Box>
    </Box>
  );
}

export default App;
