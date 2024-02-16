import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Home from '../Screens/Home'
import ReadNews from '../Screens/ReadNews'
const Stack = createStackNavigator()

const HomeNavigatior = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' component={Home}></Stack.Screen>
        <Stack.Screen name='read-news' component={ReadNews}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeNavigatior