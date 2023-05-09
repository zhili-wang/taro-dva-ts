const path = require('path');
const config = {
  projectName: 'taro-dva-ts',
  date: '2023-4-27',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    '@tarojs/plugin-html',
    '@tarojs/plugin-less',
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
    '@/framework/components': path.resolve(__dirname, '..', 'src/framework/components'),
    '@/framework/utils': path.resolve(__dirname, '..', 'src/framework/utils'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/models': path.resolve(__dirname, '..', 'src/models'),
    '@/service': path.resolve(__dirname, '..', 'src/service'),
  //   // '@/package': path.resolve(__dirname, '..', 'package.json'),
  //   // '@/project': path.resolve(__dirname, '..', 'project.config.json'),
  },
  framework: 'react',
  compiler: 'webpack5',
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  // 小程序
  mini: {
    // prerender: {
    //   include: ['pages/index/index'], // `pages/nodes/nodes` 也会参与 prerender
    // },
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  // 微信小程序
  // weapp: {
  //   module: {
  //     postcss: {
  //       cssModules: {
  //         enable: true,
  //         config: {
  //           namingPattern: 'module', // 转换模式，取值为 global/module
  //           generateScopedName: '[name]__[local]___[hash:base64:5]'
  //         }
  //       }
  //     }
  //   }
  // },
  // Taro-H5
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    }
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
