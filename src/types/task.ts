//

export type TaskType =
  | 'correct_incorrect'
  | 'count'
  | 'drag_and_drop'
  | 'select'
  | 'select_audio'
  | 'super_select'
  | 'super_select_adv'
  | 'super_tap'
  | 'tap';

export type Task = {
  id: number;
  type: TaskType;
  instructions: string[];
  data: Record<string, unknown>;
};
