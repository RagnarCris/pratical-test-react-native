import React from 'react';
import Home from './src/Screens/Home';
import Detail from './src/Screens/Detail';
import Category from './src/Screens/Category';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderHome from './src/Components/HeaderHome';
import FetchTest from './src/Screens/FetchTest';
import SectionTest from './src/Screens/SectionTest';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FetchTest">
        <Stack.Screen name="Home" component={Home} options={{headerTitle: () => (<HeaderHome/>)}} />
        <Stack.Screen name="Detail" component={Detail} options={{headerTitle: " "}} />
        <Stack.Screen name="Category" component={Category} options={{headerTitle: "Categoria"}} />
        <Stack.Screen name="FetchTest" component={FetchTest} options={{headerTitle: " "}} />
        <Stack.Screen name="SectionTest" component={SectionTest} options={{headerTitle: " "}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}