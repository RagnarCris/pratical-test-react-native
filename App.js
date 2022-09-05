import React from 'react';
import Home from './src/Screens/Home';
import Detail from './src/Screens/Detail';
import Category from './src/Screens/Category';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderHome from './src/Components/HeaderHome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerTitle: () => (<HeaderHome/>)}} />
        <Stack.Screen name="Detail" component={Detail} options={{headerTitle: " "}} />
        <Stack.Screen name="Category" component={Category} options={{headerTitle: " "}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}