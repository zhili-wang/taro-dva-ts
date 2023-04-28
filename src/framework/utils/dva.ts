import { create } from "dva-core";
import { createLogger } from "redux-logger";
import createLoading from "dva-loading";

let app: {
  use: (arg0: any) => void;
  model: (arg0: any) => any;
  start: () => void;
  _store: any;
  getStore: () => any;
  dispatch: any;
};
let store: { dispatch: any };
let dispatch: any;
let registered: boolean;

function createApp(opt: {
  /** 初始化数据 */
  initialState: any;
  onAction?: any[];
  /** 开启日志 */
  enableLog?: any;
  models: any[];
}) {
  // redux日志
  opt.onAction = [];
  if (opt.enableLog) {
    opt.onAction.push(createLogger());
  }
  app = create(opt);
  app.use(createLoading());

  // 注入model
  if (!registered) {
    opt.models.forEach((model: any) => app.model(model));
  }
  registered = true;
  app.start();

  // 设置store
  store = app._store;
  app.getStore = () => store;

  app.use({
    onError(err: any) {
      console.log(err);
    },
  });

  // 设置dispatch
  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
};
