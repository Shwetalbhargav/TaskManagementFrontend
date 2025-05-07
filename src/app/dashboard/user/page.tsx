'use client';

import { useEffect, useState } from 'react';
import { getTaskDashboard } from '@/components/services/taskService';
import NotificationList from '@/components/common/NotificationList';
import TaskCardList from '@/components/common/TaskCardList';

export default function UserDashboard() {
  const [data, setData] = useState({
    assignedTasks: [],
    createdTasks: [],
    overdueTasks: []
  });

  useEffect(() => {
    getTaskDashboard().then(setData);
  }, []);

  return (
    <main className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-green-700">Your Dashboard</h1>

      {/* Assigned Tasks */}
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Assigned Tasks</h2>
        <TaskCardList tasks={data.assignedTasks} />
      </section>

      {/* Overdue Tasks */}
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Overdue Tasks</h2>
        <TaskCardList tasks={data.overdueTasks} />
      </section>

      {/* Notifications */}
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Notifications</h2>
        <NotificationList />
      </section>
    </main>
  );
}
