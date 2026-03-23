import { createContext } from "react";
import type { Task } from "../entities/Task";

export interface TaskContextType {
  tasks: Task[];
  createTask: (attributes: Omit<Task, "id">) => Promise<void>;
  updateTask: (
    id: number,
    attributes: Partial<Omit<Task, "id">>,
  ) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

export const TaskContext = createContext({} as TaskContextType);
