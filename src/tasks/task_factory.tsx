//

// App

import { Task } from '@/types';
import { CountTask } from './count_task';
import { CorrectIncorrectTask } from './correct_incorrect_task';
import { DragAndDropTask } from './drag_and_drop_task';
import { SelectTask } from './select_task';
import { SelectAudioTask } from './select_audio_task';
import { SuperSelectTask } from './super_select_task';
import { SuperSelectAdvTask } from './super_select_adv_task';
import { SuperTapTask } from './super_tap_task';
import { TapTask } from './tap_task';

const map = {
  tap: TapTask,
  select: SelectTask,
  drag_and_drop: DragAndDropTask,
  count: CountTask,
  super_tap: SuperTapTask,
  super_select: SuperSelectTask,
  super_select_adv: SuperSelectAdvTask,
  correct_incorrect: CorrectIncorrectTask,
  select_audio: SelectAudioTask,
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

  return (
    // @ts-expect-error Ignore
    <Component key={props.task.id} next={props.next} {...props.task.data} />
  );
};
