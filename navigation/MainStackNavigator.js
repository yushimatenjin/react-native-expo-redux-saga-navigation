import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const HomeStack = createStackNavigator(
  {
    HomeScreen: HomeScreen
  },
  config
)

export default HomeStack
