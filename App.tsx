import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ComponenteParcial01 from './src/primera-parcial/ComponenteParcial01';
import PropsParcial02 from './src/primera-parcial/PropsParcial02';
import AxiosParcial from './src/primera-parcial/AxiosParcial';
import AsyncStorageParcial from './src/primera-parcial/AsyncStorageParcial';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ComponenteParcial01">
        <Stack.Screen name="ComponenteParcial01" component={ComponenteParcial01} />
        <Stack.Screen name="PropsParcial02" component={PropsParcial02} />
        <Stack.Screen name="AxiosParcial" component={AxiosParcial} />
        <Stack.Screen name="AsyncStorageParcial" component={AsyncStorageParcial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
