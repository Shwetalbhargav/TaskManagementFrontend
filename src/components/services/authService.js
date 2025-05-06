import axios from "axios";
const API = process.env.NEXT_PUBLIC_API_URL;

export const login = async(credentials) =>{
    const res = await axios.post(`${API}/auth/login`, credentials);
    return res.data;
};

export const register = async(userData) =>{
    const res = await axios.post(`${API}/auth/register`, userData);
    return res.data;
};

export const logout = async() =>{
    const res = await axios.post(`${API}/auth/logout`);
    return res.data;
};