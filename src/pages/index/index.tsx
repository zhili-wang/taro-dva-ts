import { useEffect } from 'react'
import { useDidHide, useDidShow, useLoad, usePullDownRefresh, useReady, useRouter } from '@tarojs/taro'
import { View, Text, } from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux'
import { ModelStates } from '@/models'
import styles from './index.module.less'
import Taro from '@tarojs/taro'

export default function Index() {
  const router = useRouter()
  const state = useSelector<ModelStates>(state => state)
  const common = useSelector<ModelStates>(state => state.common)
  const dispatch = useDispatch();

  // 可以使用所有的 React Hooks
  useEffect(() => {
    console.info('useEffect', { router })
  }, [])

  useLoad(() => {
    console.log('Page loaded.', {
      state,
      common,
      env: Taro.getEnv(),
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
