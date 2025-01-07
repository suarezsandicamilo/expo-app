//

export type TaskType =
  | 'tap'
  | 'select'
  | 'drag_and_drop'
  | 'count'
  | 'super_tap'
  | 'super_select';

export type Task = {
  id: number;
  type: TaskType;
  instructions: string[];
  data: Record<string, unknown>;
};
