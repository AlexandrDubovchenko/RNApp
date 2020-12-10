import React, { useEffect } from 'react'
import { Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-native'
import { getImage } from '../redux/actionCreators'
import { IAppState } from '../redux/types'

export const SplashScreen = () => {
  const history = useHistory()
  const image = useSelector((state: IAppState) => state.image)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getImage())
  }, [])
  useEffect(() => {
    if (image) {
      history.push('/login')
    }
  }, [image])
  return (
    <Image style={{
      width: '100%',
      height: '100%'
    }} source={require('../splashImage.jpg')}  />
  )
}
