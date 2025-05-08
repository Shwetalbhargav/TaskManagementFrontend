'use client';
import { Task } from '@/components/types/taskTypes'; // make sure this exists

interface TaskCardListProps {
  tasks: Task[];
}

export default function TaskCardList({ tasks }: TaskCardListProps) {
  if (!tasks?.length) return <p className="text-gray-500 italic">No tasks assigned.</p>;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {tasks.map((task) => (
        <div key={task._id} className="border rounded-xl shadow-md p-5 bg-white hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">{task.title}</h3>
          <p className="text-gray-700 mb-1">{task.description}</p>
          <div className="text-sm text-gray-600 space-y-1">
            <p>📌 Priority: {task.priority}</p>
            <p>📅 Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}</p>
            <p>🚩 Status: {task.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
