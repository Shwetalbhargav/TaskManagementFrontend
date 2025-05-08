export type TaskStatus = 'pending' | 'inProgress' | 'completed' | 'discarded';

export interface Task {
  _id: string;
  title: string;
  description?: string;
  dueDate: string;
  priority: string;
  status: TaskStatus;
}
