import { Model, Effect } from "./dvaType";

export interface DvaModel<S> extends Model<S> {
  namespace: string;
  state: Record<string, any>;
  effects: Record<string, Effect>;
}
