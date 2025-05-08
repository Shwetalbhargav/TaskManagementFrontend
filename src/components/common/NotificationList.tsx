'use client';
import { useEffect, useState } from 'react';
import { getNotifications, markAsRead } from '@/components/services/notificationService';
import { Notification } from '@/components/types/notificationTypes'; 


export default function NotificationList() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const load = async () => {
    const data = await getNotifications();
    setNotifications(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleRead = async (id: string) => {
    await markAsRead(id);
    load();
  };

  return (
    <ul className="space-y-2">
      {notifications.map((n) => (
        <li key={n._id} className="border p-2 rounded flex justify-between items-center">
          <div>
            <p>{n.message}</p>
            <small>{new Date(n.createdAt).toLocaleString()}</small>
          </div>
          {!n.read && (
            <button className="text-blue-600 text-sm" onClick={() => handleRead(n._id)}>
              Mark as Read
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
