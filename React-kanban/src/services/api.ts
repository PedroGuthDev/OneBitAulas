import type { Task } from "../entities/Task";

// taskService é um objeto que abstrai e centraliza todas as interações com a API.
export const taskService = {
  async fetchTasks(): Promise<Task[]> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`);
    return response.json();
  },
  async createTask(task: Omit<Task, "id">): Promise<Task> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    return response.json();
  },
  async updateTask(
    id: number,
    attributes: Partial<Omit<Task, "id">>,
  ): Promise<void> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attributes),
    });
    return response.json();
  },
  async deleteTask(id: number): Promise<void> {
    await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
      method: "DELETE",
    });
  },
};
