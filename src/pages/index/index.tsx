import { useEffect } from 'react'
import { useDidHide, useDidShow, useLoad, usePullDownRefresh, useReady } from '@tarojs/taro'
import { View, Text, CommonEvent } from '@tarojs/components'
import './index.less'
// import { AtTabBar } from 'taro-ui'
import { useDispatch, useSelector } from 'react-redux'

export default function Index() {

  const { demo } = useSelector(state => state.demo)
  const dispatch = useDispatch();

  useLoad(() => {
    console.log('Page loaded.')
  })
  // 可以使用所有的 React Hooks
  useEffect(() => { })

  // 对应 onReady
  useReady(() => { })

  // 对应 onShow
  useDidShow(() => { })

  // 对应 onHide
  useDidHide(() => { })

  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Hooks】
  usePullDownRefresh(() => { })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      {/* <AtTabBar
        fixed
        tabList={[
          { title: '首页', iconType: 'home' },
          { title: '我的', iconType: 'user' }
        ]}
        current={0}
        onClick={function (index: number, event: CommonEvent): void {
          throw new Error('Function not implemented.')
        }} /> */}
    </View>
  )
}
