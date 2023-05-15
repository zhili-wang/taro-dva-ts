// 推导 dva Model
import { Action, Reducer, Dispatch, } from "redux";

interface AnyAction extends Action {
  [extraProps: string]: any
}
interface EffectsCommandMap {
  put: <S>(action: {
    type: EffectAction<S extends Model ? S : string>,
    payload?: any
    [key: string]: any
  }) => any,
  call: Function,
  select: Function,
  take: Function,
  cancel: Function,
  [key: string]: any,
}
// 推导 Effect
export type Effect = (action: AnyAction, effects: EffectsCommandMap) => void;

type EffectAction<M extends Model | string> = M extends Model
  ? `${M['namespace']}/${(keyof M['effects'] | keyof M['reducers']) & string}` | `${(keyof M['effects'] | keyof M['reducers']) & string}`
  : string;

export type ReducersMapObject<S = any, A extends Action = Action> = {
  [K in keyof S]: Reducer<S[K], A>
}
export type ReducersMapObjectWithEnhancer = [ReducersMapObject, ReducerEnhancer];
interface ReducerEnhancer {
  (reducer: Reducer<any>): void,
}
export interface EffectsMapObject {
  [key: string]: Effect | EffectWithType,
}
type EffectWithType = [Effect, { type: EffectType }];
type EffectType = 'takeEvery' | 'takeLatest' | 'watcher' | 'throttle';

export interface SubscriptionsMapObject {
  [key: string]: Subscription,
}
type Subscription = (api: SubscriptionAPI, done: Function) => void;
interface SubscriptionAPI {
  // Taro没有history，这个可以废弃
  history: History,
  dispatch: DvaDispatch,
}

/**
 * ActionType， 推导当前effect & reducer
 * @default string
 */
type ActionType<M extends Model | string> = M extends Model
  ? `${M['namespace']}/${(keyof M['effects'] | keyof M['reducers']) & string}`
  : string;

type DispatchType = <S>(action: {
  type: ActionType<S extends Model ? S : string>,
  payload?: any
  [key: string]: any
}) => Promise<any>

export type DvaDispatch = DispatchType & Dispatch

export interface Model<S = Record<string, any>> {
  namespace: string,
  state?: S,
  // reducers?: ReducersMapObject<S> | ReducersMapObjectWithEnhancer,
  reducers?: {
    [k: string]: Reducer<S>;
  };
  effects?: EffectsMapObject,
  subscriptions?: SubscriptionsMapObject,
}
