import { Badge, Flex, Grid, ScrollArea } from "@radix-ui/themes";
import type { Task } from "../entities/Task";
import { TaskCard } from "./TaskCard";
import { useTasks } from "../hooks/useTasks";

export const TaskBoard: React.FC = () => {
  const { tasks } = useTasks();
  
  // Filtramos as tarefas por seus respectivos status para distribuir nas colunas do Kanban
  const taskTodo: Task[] = tasks.filter((task) => task.status === "todo");
  const taskDoing: Task[] = tasks.filter((task) => task.status === "doing");
  const taskDone: Task[] = tasks.filter((task) => task.status === "done");

  return (
    <ScrollArea scrollbars="horizontal">
      <Grid columns="3" gap="4" minWidth="64rem">
        <Flex direction="column" gap="4">
          <Badge size="3" color="gray">
            A Fazer ({taskTodo.length})
          </Badge>
          {taskTodo.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Flex>
        <Flex direction="column" gap="4">
          <Badge size="3" color="yellow">
            Fazendo ({taskDoing.length})
          </Badge>
          {taskDoing.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Flex>
        <Flex direction="column" gap="4">
          <Badge size="3" color="green">
            Feito ({taskDone.length})
          </Badge>
          {taskDone.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Flex>
      </Grid>
    </ScrollArea>
  );
};
