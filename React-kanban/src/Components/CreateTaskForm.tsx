import {
  Button,
  Flex,
  Dialog,
  Box,
  Text,
  TextField,
  TextArea,
  RadioGroup,
  Badge,
} from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";
import { TaskPriority, TaskStatus, type Task } from "../entities/Task";
import { z } from "zod";
import { useTasks } from "../hooks/useTasks";

// Schema de validação usando biblioteca Zod.
const CreateTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["todo", "doing", "done"]),
  priority: z.enum(["low", "medium", "high"]),
});

export const CreateTaskForm: React.FC = () => {
  const { createTask } = useTasks();

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // FormData cria um objeto que mapeia facilmente todos os `name` de inputs com os seus respectivos valores passados
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");
    const description = formData.get("description");
    const status = formData.get("status");
    const priority = formData.get("priority");

    // Utilizamos o Schema Zod para validar (parse) o input.
    const result: Omit<Task, "id"> = CreateTaskSchema.parse({
      title,
      description,
      status,
      priority,
    });
    event.currentTarget.reset();
    await createTask(result);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className="radix-button">
          <PlusIcon />
          Nova Tarefa
        </Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="32rem">
        <Dialog.Title>Nova Tarefa</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Preencha os campos abaixo para criar uma nova tarefa.
        </Dialog.Description>

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
                placeholder="Defina um título para a tarefa"
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
                placeholder="Defina uma descrição para a tarefa"
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
                  defaultValue="todo"
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
                  defaultValue="low"
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
              <Button type="submit">Criar Tarefa</Button>
            </Flex>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
