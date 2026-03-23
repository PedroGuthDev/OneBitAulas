export type TaskStatus = "todo" | "doing" | "done";
export const TaskStatus = {
  TODO: "todo",
  DOING: "doing",
  DONE: "done",
};

export type TaskPriority = "low" | "medium" | "high";
export const TaskPriority = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
}
