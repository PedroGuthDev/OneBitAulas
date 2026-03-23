import { useContext } from "react";
import { TaskContext, type TaskContextType } from "../contexts/taskContext";

export const useTasks = (): TaskContextType => {
  return useContext(TaskContext);
};