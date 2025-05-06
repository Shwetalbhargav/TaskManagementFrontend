import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export const createTask = async(taskData) =>{
    const res = await axios.post(`${API}/tasks`, taskData);
    return res.data;
};

export const getTask = async(filetrs ={}) =>{
    const res = await axios.get(`${API}/tasks`, {data: filetrs});
    return res.data;
};
export const updateTask = async(id, updatedData) =>{
    const res = await axios.put(`${API}/tasks/${id}`, updatedData);
    return res.data;
};
export const deleteTask = async(id) =>{
    const res = await axios.delete(`${API}/tasks/${id}`);
    return res.data;
};
export const getTaskDashboard = async() =>{
    const res = await axios.get(`${API}/tasks/dashboard`);
    return res.data;
};