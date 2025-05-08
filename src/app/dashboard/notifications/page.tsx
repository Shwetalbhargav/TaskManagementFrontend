'use client';
import DashboardLayout from '@/components/layout/DashboardLayout';
import NotificationList from '@/components/common/NotificationList';

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <NotificationList />
    </DashboardLayout>
  );
}
