import type { Model } from '@/models/entitys/dvaType'

export interface IndexModelState {
  status: boolean;
  msg: string
}

const initState: IndexModelState = {
  status: false,
  msg: 'index'
}

const IndexModel: Model<IndexModelState> = {
  namespace: 'index',
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

export default IndexModel;
