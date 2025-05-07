'use client';
import { useState } from 'react';
import useTasks from '@/components/hooks/useTasks';

export default function TaskForm({ onSuccess }) {
  const { createTask } = useTasks();
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: '3-Medium',
  });

  const handleChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(task);
    onSuccess?.();
    setTask({ title: '', description: '', dueDate: '', priority: '3-Medium' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input className="input" name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
      <textarea className="input" name="description" placeholder="Description" value={task.description} onChange={handleChange} />
      <input className="input" type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />
      <select className="input" name="priority" value={task.priority} onChange={handleChange}>
        <option value="1-Critical">1-Critical</option>
        <option value="2-High">2-High</option>
        <option value="3-Medium">3-Medium</option>
        <option value="4-Low">4-Low</option>
        <option value="5-Planning">5-Planning</option>
      </select>
      <button type="submit" className="btn">Create Task</button>
    </form>
  );
}
