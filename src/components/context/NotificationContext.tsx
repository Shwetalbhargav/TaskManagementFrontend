'use client';
import React, { createContext, useEffect, useState } from 'react';
import { getNotifications, markAsRead } from '@/components/services/notificationService';
import { Notification } from '@/components/types/notificationTypes';

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  refreshNotifications: () => Promise<void>;
  markNotificationAsRead: (id: string) => Promise<void>;
}

export const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const refreshNotifications = async () => {
    try {
      const data = await getNotifications();
      setNotifications(data);
    } catch (err) {
      console.error('Failed to fetch notifications:', err);
    }
  };

  const markNotificationAsRead = async (id: string) => {
    try {
      await markAsRead(id);
      await refreshNotifications();
    } catch (err) {
      console.error('Failed to mark as read:', err);
    }
  };

  useEffect(() => {
    refreshNotifications();
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <NotificationContext.Provider
      value={{ notifications, unreadCount, refreshNotifications, markNotificationAsRead }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
