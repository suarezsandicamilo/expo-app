//

// App

import { Task } from '@/types';
import { CountTask } from './count_task';
import { DragAndDropTask } from './drag_and_drop_task';
import { SelectTask } from './select_task';
import { SuperSelectTask } from './super_select_task';
import { SuperTapTask } from './super_tap_task';
import { TapTask } from './tap_task';
import { Correct_IncorrectTask } from './correct_incorrect_task';

const map = {
  tap: TapTask,
  select: SelectTask,
  drag_and_drop: DragAndDropTask,
  count: CountTask,
  super_tap: SuperTapTask,
  super_select: SuperSelectTask,
  correct_incorrect: Correct_IncorrectTask
} as const;

type Props = {
  task: Task;
  next: () => void;
};

export const createTask = (props: Props) => {
  const Component = map[props.task.type];

  if (!Component) {
    throw new Error('Unknown task type');
  }

  // @ts-expect-error Ignore
  return <Component next={props.next} {...props.task.data} />;
};
