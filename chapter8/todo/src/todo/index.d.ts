interface ITodo {
  id: string;
  task: string;
  deletedAt?: number;
  createAt: string;
  isCompleted: 0 | 1;
}