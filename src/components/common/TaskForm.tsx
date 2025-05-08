// TaskForm.tsx
'use client';
import { useEffect, useState } from 'react';
import useTasks from '@/components/hooks/useTasks';
import { Task, TaskStatus } from '@/components/types/taskTypes';

interface TaskFormProps {
  onSuccess: () => void;
  buttonClassName?: string;
  taskToEdit?: any;
}

export default function TaskForm({ onSuccess, buttonClassName, taskToEdit }: TaskFormProps) {
  const { createTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: '3-Medium',
    status: 'pending' as TaskStatus,
  });

  useEffect(() => {
    if (taskToEdit) setTask(taskToEdit);
  }, [taskToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskToEdit?._id) {
      await updateTask(taskToEdit._id, task);
    } else {
      await createTask(task);
    }
    onSuccess?.();
    setTask({
      title: '',
      description: '',
      dueDate: '',
      priority: '3-Medium',
      status: 'pending',
    });
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Same input fields as before */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            className="w-full border rounded px-4 py-2"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
            placeholder="Task title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Due Date</label>
          <input
            type="date"
            className="w-full border rounded px-4 py-2"
            name="dueDate"
            value={task.dueDate?.split('T')[0] || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          className="w-full border rounded px-4 py-2"
          name="description"
          rows={3}
          value={task.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Priority</label>
        <select
          className="w-full border rounded px-4 py-2"
          name="priority"
          value={task.priority}
          onChange={handleChange}
        >
          <option value="1-Critical">1 - Critical</option>
          <option value="2-High">2 - High</option>
          <option value="3-Medium">3 - Medium</option>
          <option value="4-Low">4 - Low</option>
          <option value="5-Planning">5 - Planning</option>
        </select>
      </div>

      <div>
  <label className="block text-sm font-medium mb-1">Status</label>
  <select
  name="status"
  value={task.status}
  onChange={handleChange}
  className="w-full border rounded px-4 py-2"
>
  <option value="pending">Pending</option>
  <option value="inProgress">In Progress</option>
  <option value="completed">Completed</option>
  <option value="discarded">Discarded</option>
</select>

</div>


      <button
        type="submit"
        className={`bg-indigo-600 text-white px-6 py-2 rounded shadow hover:bg-indigo-700 transition ${buttonClassName}`}
      >
        {taskToEdit ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  );
}
