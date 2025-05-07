'use client';

import { useEffect } from 'react';
import TaskForm from '@/components/common/TaskForm';
import TeamForm from '@/components/common/TeamForm';
import NotificationList from '@/components/common/NotificationList';
import useTasks from '@/components/hooks/useTasks';

export default function ManagerDashboard() {
  const { tasks, fetchTasks } = useTasks();

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-blue-700">Manager Dashboard</h1>

      {/* Create Task Section */}
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Create Task</h2>
        <TaskForm onSuccess={fetchTasks} />
      </section>

      {/* Create/Update Team */}
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Manage Team</h2>
        <TeamForm />
      </section>

      {/* Notifications */}
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Notifications</h2>
        <NotificationList />
      </section>

      {/* Task List */}
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Your Created Tasks</h2>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task._id} className="border p-2 rounded">
              <strong>{task.title}</strong> - {task.status} - {task.priority}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
