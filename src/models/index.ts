import common from "./common";
import demo, { DemoModelState } from "./demo";
// import home from '../pages/home/model';
// import user from '../pages/user/model';
// import login from '../pages/login/model';

export type ModelStates = {
  common: any;
  demo: DemoModelState
}

// 注入model的数组
export default [
  common,
  demo,
];
