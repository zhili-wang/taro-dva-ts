import common from "./common";
import demo, { DemoModelState } from "./demo";
import index, { IndexModelState } from "../pages/index/model";

export type ModelStates = {
  common: any;
  demo: DemoModelState
  index: IndexModelState,
}

// 注入model的数组
export default [
  common,
  demo,
  index,
];
