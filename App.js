import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ingreso } from "./Screens/IngresosScreen";
import { Gasto } from "./Screens/GastosScreen";
import { Home } from "./Screens/Home";
import { Listado } from "./Screens/ListaGastos";
import { Icon } from "react-native-elements";

let NavStack = createStackNavigator();
let NavTab = createBottomTabNavigator();
let NavDrawer = createDrawerNavigator();

TabHome = () => {
  return (
    <NavTab.Navigator initialRouteName="StackIngresos">
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
      {/* <NavTab.Screen
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
      /> */}
    </NavTab.Navigator>
  );
}

StackHome = () => {
  return (
    <NavStack.Navigator initialRouteName="Home">
      <NavStack.Screen
        options={{ title: "Home" }}
        name="Home"
        component={TabHome}
      />
      <NavStack.Screen
        options={{ title: "Nuevo Gasto" }}
        name="StackGastos"
        component={Gasto}
      />
      <NavStack.Screen
        options={{ title: "Nuevo Ingreso" }}
        name="StackIngresos"
        component={Ingreso}
      />
    </NavStack.Navigator>
  );
  
}


export default class App extends Component {
render(){
  return (
    <NavigationContainer>
      <NavDrawer.Navigator initialRouteName="Home">
        <NavDrawer.Screen name="Home" component={StackHome}></NavDrawer.Screen>
      </NavDrawer.Navigator>
    </NavigationContainer>
  );
}
}


