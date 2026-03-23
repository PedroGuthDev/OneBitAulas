import { Badge, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import type { Task } from "../entities/Task";
import { TaskPriority, TaskStatus } from "../entities/Task";
import { useTasks } from "../hooks/useTasks";
import { UpdateTaskForm } from "./UpdateTaskForm";

export const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  const { updateTask, deleteTask } = useTasks();
  
  const handleUpdateTaskStatus = async (status: TaskStatus) => {
    // Se está em 'todo' vai para 'doing', senão vai para 'done'.
    const newStatus = status === "todo" ? "doing" : "done";
    // Evita tentar atualizar tarefas que já estão concluídas ("done")
    if (status !== TaskStatus.DONE) {
      await updateTask(task.id, { status: newStatus });
    }
  };
  // Função para excluir a tarefa garantindo que o usuário confirme a ação
  const handleDeleteTask = async () => {
    if (!confirm("Tem certeza que deseja excluir esta tarefa?")) {
      return; // Interrompe a função se o usuário cancelar
    }
    await deleteTask(task.id);
  };
  const getActionText = (status: TaskStatus) => {
    switch (status) {
      case TaskStatus.TODO:
        return "Fazer";
      case TaskStatus.DOING:
        return "Concluir";
      case TaskStatus.DONE:
        return "Feito";
    }
  };
  const getPriorityColor = (priority: TaskPriority) => {
    switch (priority) {
      case TaskPriority.LOW:
        return "sky";
      case TaskPriority.MEDIUM:
        return "amber";
      case TaskPriority.HIGH:
        return "ruby";
    }
  };
  const getStatusColor = (status: TaskStatus) => {
    switch (status) {
      case TaskStatus.TODO:
        return "indigo";
      case TaskStatus.DOING:
        return "green";
      case TaskStatus.DONE:
        return "bronze";
    }
  };
  return (
    <Card>
      <Flex align="center" gap="4">
        <Heading as="h3" size={"3"}>
          {task.title}
        </Heading>
        <Badge color={getPriorityColor(task.priority)}>{task.priority}</Badge>
        <UpdateTaskForm task={task} />
      </Flex>
      <Text as="p" my="4">
        {task.description}
      </Text>
      <Flex gap={"2"}>
        {task.status !== "done" && (
          <Button
            className="radix-button"
            color={getStatusColor(task.status)}
            onClick={() => handleUpdateTaskStatus(task.status)}
          >
            {getActionText(task.status)}
          </Button>
        )}
        <Button className="radix-button" color="red" onClick={handleDeleteTask}>
          Excluir
        </Button>
      </Flex>
    </Card>
  );
};
