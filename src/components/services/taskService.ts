import axios from "axios";
import { Task } from "@/components/types/taskTypes";

const API = process.env.NEXT_PUBLIC_API_URL;

export const getTask = async (): Promise<Task[]> => {
  const res = await axios.get(`${API}/tasks`, { withCredentials: true });
  return res.data;
};

export const createTask = async (taskData: Partial<Task>): Promise<Task> => {
  const res = await axios.post(`${API}/tasks`, taskData, { withCredentials: true });
  return res.data;
};

export const updateTask = async (id: string, updates: Partial<Task>): Promise<Task> => {
  const res = await axios.put(`${API}/tasks/${id}`, updates, { withCredentials: true });
  return res.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${API}/tasks/${id}`, { withCredentials: true });
};
