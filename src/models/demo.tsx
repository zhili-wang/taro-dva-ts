import { DvaModel } from "./entitys";

export interface DemoModelState {
  status: boolean
}

const initState: DemoModelState = {
  status: false,
}

const DemoModel: DvaModel<DemoModelState> = {
  namespace: 'demo',
  state: initState,
  effects: {
  },
  subscriptions: {
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    clear() {
      return initState
    }
  }
};

export default DemoModel;
