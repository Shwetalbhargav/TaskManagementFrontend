export interface Task {
    _id: string;
    title: string;
    description?: string;
    dueDate: string;
    priority: string;
    status: 'todo' | 'in-progress' | 'done';
  }
  