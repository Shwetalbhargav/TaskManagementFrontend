import axios from "axios";
import { LoginCredentials, RegisterData, AuthResponse } from "@/components/types/authTypes";
const API = process.env.NEXT_PUBLIC_API_URL;

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const res = await axios.post(`${API}/auth/login`, credentials);
    return res.data;
  };
  
  export const register = async (userData: RegisterData): Promise<AuthResponse> => {
    const res = await axios.post(`${API}/auth/register`, userData);
    return res.data;
  };
  
  export const logout = async (): Promise<{ message: string }> => {
    const res = await axios.post(`${API}/auth/logout`);
    return res.data;
  };