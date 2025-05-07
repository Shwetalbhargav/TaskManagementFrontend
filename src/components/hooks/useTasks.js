import { useState } from "react";
import * as taskService  from "../services/taskService";

const useTasks = () =>{
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async(filters = {}) => {
        const data = await taskService.getTask(filters);
        setTasks(data);
    };

    const createTask = async(taskData) =>{
        const task = await taskService.createTask(taskData);
        setTasks((prev) => [...prev, task]);
        return task;
    };

    const updateTask = async(id, updates) =>{
        const updated = await taskService.updateTask(id,updates);

        setTasks((prev) => prev.map((t) => (t._id ===id ? updated : t)));
        return updated;
    };

    const deleteTask = async(id) =>{
        await taskService.deleteTask(id);
        setTasks((prev) => prev.filter((t) => t._id !==id));
    };

    return{
        tasks,
        fetchTasks,
        createTask,
        updateTask,
        deleteTask
    };
};

export default useTasks;