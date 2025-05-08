'use client'; 

import { useEffect } from 'react';
import useTasks from '@/components/hooks/useTasks';
import useTeams from '@/components/hooks/useTeams'; 
import TaskForm from '@/components/common/TaskForm';
import TeamForm from '@/components/common/TeamForm';
import NotificationList from '@/components/common/NotificationList';
import DashboardLayout from '@/components/layout/DashboardLayout';
import TaskTable from '@/components/common/TaskTable';
import TeamTable from '@/components/common/TeamTable';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

export default function AdminDashboard() {
  const { tasks, fetchTasks } = useTasks();
  const { fetchTeams } = useTeams(); // ✅

  useEffect(() => {
    fetchTasks();
    fetchTeams(); // ✅
  }, []);

  const chartData = [
    { name: 'Pending', value: tasks.filter((t) => t.status === 'pending').length },
    { name: 'In Progress', value: tasks.filter((t) => t.status === 'inProgress').length },
    { name: 'Completed', value: tasks.filter((t) => t.status === 'completed').length }
  ];

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-indigo-800 mb-6">Admin Dashboard</h1>

      {/* Task Chart */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold">Task Status Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Task Creation */}
      <section className="bg-white text-black shadow rounded-xl p-6 space-y-4 mt-8">
        <h2 className="text-xl font-semibold">Create New Task</h2>
        <TaskForm onSuccess={fetchTasks} buttonClassName="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition" />
      </section>

      {/* Full Task CRUD Section */}
      <section className="bg-white p-6 mt-10 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold">Manage All Tasks</h2>
        <TaskTable />
      </section>

      {/* Team Management */}
      <section className="bg-white text-black shadow rounded-xl p-6 space-y-4 mt-8">
        <h2 className="text-xl font-semibold">Manage Teams</h2>
        <TeamTable />
      </section>

      {/* Create Team */}
      <section className="bg-white text-black shadow rounded-xl p-6 space-y-4 mt-8">
        <h2 className="text-xl font-semibold">Create Team</h2>
        <TeamForm onSuccess={fetchTeams} />
      </section>

      {/* Notifications */}
      <section className="bg-white text-black shadow rounded-xl p-6 space-y-4 mt-8">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <NotificationList />
      </section>

      {/* Task List */}
      <section className="bg-white text-black shadow rounded-xl p-6 space-y-4 mt-8">
        <h2 className="text-xl font-semibold">All Tasks</h2>
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
