import axios from "axios";
import { Notification } from "@/components/types/notificationTypes";

const API = process.env.NEXT_PUBLIC_API_URL;

export const getNotifications = async (): Promise<Notification[]> => {
  const res = await axios.get(`${API}/notifications`);
  return res.data;
};

export const markAsRead = async (id: string): Promise<Notification> => {
  const res = await axios.post(`${API}/notifications/${id}/read`);
  return res.data;
};
