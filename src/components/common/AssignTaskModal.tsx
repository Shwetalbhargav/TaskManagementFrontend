'use client';
import { useState } from 'react';
import { assignTaskToTeam } from '@/components/services/teamService';

interface AssignTaskModalProps {
  teamId: string;
  teamName: string;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function AssignTaskModal({ teamId, teamName, onClose, onSuccess }: AssignTaskModalProps) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: '3-Medium',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await assignTaskToTeam(teamId, task);
      onSuccess?.();
      onClose();
    } catch (err) {
      console.error('Failed to assign task to team:', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Assign Task to "{teamName}"</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            className="w-full border px-4 py-2 rounded"
            placeholder="Task Title"
            value={task.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            className="w-full border px-4 py-2 rounded"
            placeholder="Task Description"
            value={task.description}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dueDate"
            className="w-full border px-4 py-2 rounded"
            value={task.dueDate}
            onChange={handleChange}
          />
          <select
            name="priority"
            className="w-full border px-4 py-2 rounded"
            value={task.priority}
            onChange={handleChange}
          >
            <option value="1-Critical">1 - Critical</option>
            <option value="2-High">2 - High</option>
            <option value="3-Medium">3 - Medium</option>
            <option value="4-Low">4 - Low</option>
            <option value="5-Planning">5 - Planning</option>
          </select>

          <div className="flex justify-end space-x-3 pt-4">
            <button type="button" onClick={onClose} className="text-gray-600 hover:underline">Cancel</button>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700">Assign</button>
          </div>
        </form>
      </div>
    </div>
  );
}
