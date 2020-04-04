import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import search from './src/pages/searchScreen'
import resultsShow from './src/pages/ResultsShowScreen'

const Stack = createStackNavigator()

function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Search" screenOptions={{headerBackTitle:null}} >
        <Stack.Screen name="Search" component={search} options={{ title: 'BusinessSearch' }}/>
        <Stack.Screen name="ResultsShow" component={resultsShow} options={{ title: 'ResultsShow' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
