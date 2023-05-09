import { useEffect } from 'react'
import { useDidHide, useDidShow, useLoad, usePullDownRefresh, useReady } from '@tarojs/taro'
import { View, Text, } from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux'
import { ModelStates } from '@/models'
import styles from './index.module.less'

export default function Index() {
  const state = useSelector<ModelStates>(state => state)
  const common = useSelector<ModelStates>(state => state.common)
  const dispatch = useDispatch();

  // 可以使用所有的 React Hooks
  useEffect(() => {
    console.info('useEffect')
  })

  useLoad(() => {
    console.log('Page loaded.', {
      state,
      common,
    })
    dispatch({
      type: 'common/pageInit',
      payload: '测试111'
    })
  })

  // 对应 onReady
  useReady(() => { })

  // 对应 onShow
  useDidShow(() => { })

  // 对应 onHide
  useDidHide(() => { })

  usePullDownRefresh(() => { })

  return (
    <View className={styles.pageContent}>
      <Text>Hello world!</Text>
    </View>
  )
}
