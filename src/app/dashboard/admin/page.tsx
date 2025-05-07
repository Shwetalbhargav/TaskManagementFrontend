'use client';

import TaskForm from '@/components/common/TaskForm';
import TeamForm from '@/components/common/TeamForm';
import NotificationList from '@/components/common/NotificationList';
import useTasks from '@/components/hooks/useTasks';
import { useEffect } from 'react';

export default function AdminDashboard() {
  const { tasks, fetchTasks } = useTasks();

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-indigo-700">Admin Dashboard</h1>

      {/* Task Creation */}
      <section className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-2">Create New Task</h2>
        <TaskForm onSuccess={fetchTasks} />
      </section>

      {/* Team Creation */}
      <section className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-2">Create Team</h2>
        <TeamForm />
      </section>

      {/* Notifications */}
      <section className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-2">Notifications</h2>
        <NotificationList />
      </section>

      {/* Task List */}
      <section className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-2">All Tasks</h2>
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
