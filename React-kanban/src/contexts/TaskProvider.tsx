import { useEffect, useState } from "react";
import type { Task } from "../entities/Task";
import { taskService } from "../services/api";
import { TaskContext } from "./taskContext";

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  // Estado local que armazena a lista de todas as tarefas da aplicação
  const [tasks, setTasks] = useState<Task[]>([]);

  // Busca as tarefas da API JSON Server e inicializa o nosso estado.
  useEffect(() => {
    taskService.fetchTasks().then((storedTasks) => {
      setTasks(storedTasks);
    });
  }, []);
  // Função para criar uma nova tarefa. Omitimos o 'id' pois ele
  // é gerado dinamicamente pelo JSON Server
  const createTask = async (attributes: Omit<Task, "id">) => {
    const newTask = await taskService.createTask(attributes);
    // Atualiza o estado local adicionando a tarefa recém-criada ao final do array
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  // Função para modificar propriedades específicas de uma tarefa existente (Partial).
  const updateTask = async (
    id: number,
    attributes: Partial<Omit<Task, "id">>,
  ) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const taskIndex = updatedTasks.findIndex((task) => task.id === id);
      Object.assign(updatedTasks[taskIndex], attributes);
      return updatedTasks;
    });
    await taskService.updateTask(id, attributes);
  };
  const deleteTask = async (id: number) => {
    await taskService.deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
