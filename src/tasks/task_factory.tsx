//

// App

import { Task } from '@/types';

import { BubblesTask } from './bubbles_task';

import { DragAndDropTask } from './drag_and_drop_task';

import { SelectTask } from './select_task';

import { TapTask } from './tap_task';

const create = (task: Task, next: () => void) => {
  switch (task.type) {
    case 'bubbles':
      return <BubblesTask next={next} {...task.data} />;
    case 'drag_and_drop':
      return <DragAndDropTask next={next} {...task.data} />;
    case 'select':
      return <SelectTask next={next} {...task.data} />;
    case 'tap':
      return <TapTask next={next} {...task.data} />;
    default:
      return <></>;
  }
};

export const TaskFactory = {
  create,
};
