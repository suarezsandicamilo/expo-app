//

// App

import { createTask } from '@/tasks';
import { Task } from '@/types';

type Props = {
  task: Task;
  next: () => void;
};

export const TaskScreen = (props: Props) => {
  return createTask(props);
};
