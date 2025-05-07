'use client';

export default function TaskCardList({ tasks }) {
  if (!tasks?.length) return <p>No tasks assigned.</p>;

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {tasks.map((task) => (
        <div key={task._id} className="border p-4 rounded shadow">
          <h3 className="font-bold text-lg">{task.title}</h3>
          <p>{task.description}</p>
          <p className="text-sm">Priority: {task.priority}</p>
          <p className="text-sm">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
          <p className="text-sm">Status: {task.status}</p>
        </div>
      ))}
    </div>
  );
}
