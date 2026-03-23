import { Pencil2Icon } from "@radix-ui/react-icons";
import { TaskPriority, TaskStatus, type Task } from "../entities/Task";
import {
  Dialog,
  Button,
  Flex,
  Box,
  Text,
  TextField,
  TextArea,
  RadioGroup,
  Badge,
} from "@radix-ui/themes";
import { useTasks } from "../hooks/useTasks";

export const UpdateTaskForm: React.FC<{ task: Task }> = ({ task }) => {
  const { updateTask } = useTasks();
  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const status = formData.get("status") as TaskStatus;
    const priority = formData.get("priority") as TaskPriority;
    await updateTask(task.id, {
      title,
      description,
      status,
      priority,
    });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="gray" variant="ghost">
          <Pencil2Icon />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="32rem">
        <Dialog.Title>Editar Tarefa</Dialog.Title>

        <form onSubmit={handleSubmit}>
          <Flex gap="4" direction="column">
            <Box maxWidth="32rem">
              <Box mb="2">
                <Text as="label" htmlFor="title">
                  Título
                </Text>
              </Box>
              <TextField.Root
                id="title"
                name="title"
                defaultValue={task.title}
                autoFocus
                required
              />
            </Box>
            <Box maxWidth="32rem">
              <Box mb="2">
                <Text as="label" htmlFor="description">
                  Descrição
                </Text>
              </Box>
              <TextArea
                id="description"
                name="description"
                defaultValue={task.description}
                required
              />
            </Box>
            <Flex gap="8">
              <Box>
                <Text as="div" size="2" mb="2">
                  Situação
                </Text>
                <RadioGroup.Root
                  name="status"
                  defaultValue={task.status}
                  aria-label="Situação da tarefa"
                >
                  {Object.values(TaskStatus).map((status) => (
                    <RadioGroup.Item key={status} value={status}>
                      {status === TaskStatus.TODO && (
                        <Badge color="gray">A Fazer</Badge>
                      )}
                      {status === TaskStatus.DOING && (
                        <Badge color="yellow">Fazendo</Badge>
                      )}
                      {status === TaskStatus.DONE && (
                        <Badge color="green">Feito</Badge>
                      )}
                    </RadioGroup.Item>
                  ))}
                </RadioGroup.Root>
              </Box>
              <Box>
                <Text as="div" size="2" mb="2">
                  Prioridade
                </Text>
                <RadioGroup.Root
                  name="priority"
                  defaultValue={task.priority}
                  aria-label="Prioridade da tarefa"
                >
                  {Object.values(TaskPriority).map((priority) => (
                    <RadioGroup.Item key={priority} value={priority}>
                      {priority === TaskPriority.LOW && (
                        <Badge color="sky">Baixa</Badge>
                      )}
                      {priority === TaskPriority.MEDIUM && (
                        <Badge color="amber">Média</Badge>
                      )}
                      {priority === TaskPriority.HIGH && (
                        <Badge color="ruby">Alta</Badge>
                      )}
                    </RadioGroup.Item>
                  ))}
                </RadioGroup.Root>
              </Box>
            </Flex>
            <Flex gap="2" justify={"end"}>
              <Dialog.Close>
                <Button color="gray" variant="soft">
                  Cancelar
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button type="submit">Atualizar Tarefa</Button>
              </Dialog.Close>
            </Flex>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
