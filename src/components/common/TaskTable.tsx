// TaskTable.tsx
'use client';
import { useState } from 'react';
import useTasks from '@/components/hooks/useTasks';
import TaskForm from './TaskForm';

export default function TaskTable() {
  const { tasks, deleteTask } = useTasks();
  const [editingTask, setEditingTask] = useState<any | null>(null);

  return (
    <div className="space-y-6">
      {editingTask && (
        <div className="border p-4 rounded bg-white shadow">
          <h3 className="text-lg font-semibold mb-2">Edit Task</h3>
          <TaskForm taskToEdit={editingTask} onSuccess={() => { fetchTasks(); setEditingTask(null); } } />
        </div>
      )}

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Priority</th>
            <th className="p-2 border">Due Date</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td className="p-2 border">{task.title}</td>
              <td className="p-2 border">{task.priority}</td>
              <td className="p-2 border">{task.dueDate?.split('T')[0]}</td>
              <td className="p-2 border">{task.status}</td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => setEditingTask(task)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
