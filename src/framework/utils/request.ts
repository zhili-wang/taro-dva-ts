import Taro from "@tarojs/taro";
// import { baseUrl, noConsole } from '../config';
// 请求连接前缀
export const baseUrl = "https://ms-api.caibowen.net";
// 输出日志信息
export const noConsole = false;

const request_data = {
  platform: "wap",
  rent_mode: 2,
};
interface Options {
  url: string;
  method?: keyof Taro.request.Method;
  data: any;
}
export default (options: Options) => {
  const { method = 'POST', data = {} } = options;
  if (!noConsole) {
    console.log(
      `${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(
        options.data
      )}`
    );
  }
  return Taro.request({
    url: baseUrl + options.url,
    data: {
      ...request_data,
      ...options.data,
    },
    header: {
      "Content-Type": "application/json",
    },
    method: method.toUpperCase(),
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(
          `${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`,
          res.data
        );
      }
      if (data.status !== "ok") {
        Taro.showToast({
          title: `${res.data.error.message}~` || res.data.error.code,
          icon: "none",
          mask: true,
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  });
};
