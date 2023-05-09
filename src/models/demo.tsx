import { DvaModel } from "./entitys";

export interface DemoModelState {
  status: boolean;
  msg: string
}

const initState: DemoModelState = {
  status: false,
  msg: '测试'
}

const DemoModel: DvaModel<DemoModelState> = {
  namespace: 'demo',
  state: initState,
  effects: {
    *pageInit({ },) {
      console.info('init test')
    }
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
