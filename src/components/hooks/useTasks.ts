'use client';

import { useState } from "react";
import * as taskService from "@/components/services/taskService";
import { Task } from "@/components/types/taskTypes";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const data = await taskService.getTask();
    setTasks(data);
  };

  const createTask = async (taskData: Partial<Task>) => {
    const task = await taskService.createTask(taskData);
    setTasks((prev) => [...prev, task]);
    return task;
  };

  const updateTask = async (id: string, updates: Partial<Task>) => {
    const updated = await taskService.updateTask(id, updates);
    setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
    return updated;
  };

  const deleteTask = async (id: string) => {
    await taskService.deleteTask(id);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  return {
    tasks,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;
