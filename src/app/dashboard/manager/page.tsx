'use client';

import { useEffect } from 'react';
import useTasks from '@/components/hooks/useTasks';
import TaskForm from '@/components/common/TaskForm';
import TeamForm from '@/components/common/TeamForm';
import NotificationList from '@/components/common/NotificationList';
import DashboardLayout from '@/components/layout/DashboardLayout';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

export default function ManagerDashboard() {
  const { tasks, fetchTasks } = useTasks();

  useEffect(() => {
    fetchTasks();
  }, []);

  const chartData = [
    { name: 'To Do', value: tasks.filter((t) => t.status === 'todo').length },
    { name: 'In Progress', value: tasks.filter((t) => t.status === 'in-progress').length },
    { name: 'Done', value: tasks.filter((t) => t.status === 'done').length },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Manager Dashboard</h1>

      {/* Task Chart */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold">Task Summary</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Task Form */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4 mt-8">
        <h2 className="text-xl font-semibold">Create Task</h2>
        <TaskForm onSuccess={fetchTasks} />
      </section>

      {/* Team Form */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4 mt-8">
        <h2 className="text-xl font-semibold">Manage Team</h2>
        <TeamForm />
      </section>

      {/* Notifications */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4 mt-8">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <NotificationList />
      </section>

      {/* Task List */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4 mt-8">
        <h2 className="text-xl font-semibold">Created Tasks</h2>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task._id} className="border p-4 rounded-lg hover:bg-gray-50 transition">
              <strong>{task.title}</strong> - {task.status} - {task.priority}
            </li>
          ))}
        </ul>
      </section>
    </DashboardLayout>
  );
}
