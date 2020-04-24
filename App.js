import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ingreso } from "./Screens/IngresosScreen";
import { Gasto } from "./Screens/GastosScreen";
import { Home } from "./Screens/Home";
import { Listado } from "./Screens/ListaGastos";
import { Icon } from "react-native-elements";

// let NavStack = createStackNavigator();
let NavTab = createBottomTabNavigator();

export default class App extends Component {
render(){
  return (
    <NavigationContainer>
      <NavTab.Navigator initialRouteName="StackHome">
        <NavTab.Screen
          options={{
            tabBarLabel: "Listado",
            tabBarIcon: () => {
              return (
                <Icon
                  reverse
                  name="list"
                  type="font-awesome"
                  color="#517fa4"
                  size={16}
                />
              );
            },
          }}
          name="Listado"
          component={Listado}
        />
        <NavTab.Screen
          options={{
            tabBarLabel: "Agregar Ingresos",
            tabBarIcon: () => {
              return (
                <Icon
                  reverse
                  name="plus"
                  type="font-awesome"
                  color="#517fa4"
                  size={16}
                />
              );
            },
          }}
          name="StackIngresos"
          component={Ingreso}
        />
        <NavTab.Screen
          options={{
            tabBarLabel: "Agregar Gastos",
            tabBarIcon: () => {
              return (
                <Icon
                  reverse
                  name="minus"
                  type="font-awesome"
                  color="#517fa4"
                  size={16}
                />
              );
            },
          }}
          name="StackGastos"
          component={Gasto}
        />
      </NavTab.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <NavStack.Navigator initialRouteName="StackHome">
    //     <NavStack.Screen
    //       options={{ title: "Agregar Ingresos" }}
    //       name="StackIngresos"
    //       component={Ingreso}
    //     />
    //     <NavStack.Screen
    //       options={{ title: "Agregar Gastos" }}
    //       name="StackGastos"
    //       component={Gasto}
    //     />
    //     <NavStack.Screen
    //       options={{ title: "Gastos Diarios" }}
    //       name="StackHome"
    //       component={Home}
    //     />
    //   </NavStack.Navigator>
    // </NavigationContainer>
  );
}
}


