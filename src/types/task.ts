//

export type Task = {
  id: number;
  type: string;
  instruction?: string;
  data?: Record<string, unknown>;
};
