import type { Model } from '@/models/entitys/dvaType'

export interface DemoModelState {
  status: boolean;
  msg: string
}

const initState: DemoModelState = {
  status: false,
  msg: '测试'
}

const DemoModel: Model<DemoModelState> = {
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
