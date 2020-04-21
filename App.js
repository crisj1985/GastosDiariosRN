import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { Ingreso } from "./Screens/IngresosScreen";
import { Gasto } from "./Screens/GastosScreen";
import { Home } from "./Screens/Home";

let NavStack = createStackNavigator();

export default class App extends Component {
render(){
  return (
    <NavigationContainer>
      <NavStack.Navigator initialRouteName="StackHome">
        <NavStack.Screen
          options={{ title: "Agregar Ingresos" }}
          name="StackIngresos"
          component={Ingreso}
        />
        <NavStack.Screen
          options={{ title: "Agregar Gastos" }}
          name="StackGastos"
          component={Gasto}
        />
        <NavStack.Screen
          options={{ title: "Gastos Diarios" }}
          name="StackHome"
          component={Home}
        />
      </NavStack.Navigator>
    </NavigationContainer>
  );
}
}


