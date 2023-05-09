import { DvaModel } from "src/models/entitys";

export interface IndexModelState {
  status: boolean;
  msg: string
}

const initState: IndexModelState = {
  status: false,
  msg: 'index'
}

const IndexModel: DvaModel<IndexModelState> = {
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
