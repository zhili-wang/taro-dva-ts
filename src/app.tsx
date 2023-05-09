import { PropsWithChildren, useEffect } from "react";
import { useDidHide, useDidShow, useError, useLaunch } from "@tarojs/taro";
import "./app.less";
import dva from "./framework/utils/dva";
import models from './models';
import { Provider } from 'react-redux'

const dvaApp = dva.createApp({
  initialState: {},
  models,
});
const store = dvaApp.getStore();

function App({ children }: PropsWithChildren) {
  useEffect(() => {});

  // onLaunch
  useLaunch(() => {
    console.log("App launched.");
  });

  // onShow
  useDidShow(() => {});

  // onHide
  useDidHide(() => {});

  // onError
  useError((error) => {
    console.log(error);
  });
  // return children
  return <Provider store={store}>{children}</Provider>;
}

export default App;
