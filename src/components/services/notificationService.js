import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export const getNotifications = async() =>{
    const res = await axios.post(`${API}/notifications`);
    return res.data;
};

export const markAsRead = async(id) =>{
    const res = await axios.post(`${API}/notifications/${id}/read`);
    return res.data;
};