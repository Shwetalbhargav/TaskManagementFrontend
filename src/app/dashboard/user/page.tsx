'use client';

import { useEffect, useState } from 'react';
import { getTaskDashboard } from '@/components/services/taskService';
import NotificationList from '@/components/common/NotificationList';
import TaskCardList from '@/components/common/TaskCardList';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function UserDashboard() {
  const [data, setData] = useState({
    assignedTasks: [],
    createdTasks: [],
    overdueTasks: [],
  });

  useEffect(() => {
    getTaskDashboard().then(setData);
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-green-700 mb-6">Your Dashboard</h1>

      {/* Assigned Tasks */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold">Assigned Tasks</h2>
        <TaskCardList tasks={data.assignedTasks} />
      </section>

      {/* Overdue Tasks */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4 mt-8">
        <h2 className="text-xl font-semibold text-red-600">Overdue Tasks</h2>
        <TaskCardList tasks={data.overdueTasks} />
      </section>

      {/* Notifications */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4 mt-8">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <NotificationList />
      </section>
    </DashboardLayout>
  );
}
