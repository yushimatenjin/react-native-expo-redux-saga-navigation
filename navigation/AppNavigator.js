import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import MainStackNavigator from './MainStackNavigator'

const AppContainer = createAppContainer(MainStackNavigator)
export default AppContainer
