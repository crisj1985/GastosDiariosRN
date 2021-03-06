import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ingreso } from "./Screens/IngresosScreen";
import { Gasto } from "./Screens/GastosScreen";
import { Login } from "./Screens/Login";
import { Listado } from "./Screens/ListaGastos";
import { Registrar } from "./Screens/Registrar";
import { CerrarSesion } from "./Screens/CerrarSesion";
import { CambiarClave } from "./Screens/CambiarClave";
import { Icon } from "react-native-elements";
import { cargarConfiguration} from './Servicios/FirebaseConfig';
import firebase from "firebase";

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
constructor (){
  super();
  this.state={
    logueado:false
  }

if(!global.estaConfigurado)
  cargarConfiguration();

  firebase.auth().onAuthStateChanged((usuario) => {
    if (usuario) {
      global.mailUsuario = usuario.email;
      this.setState({ logueado: true })
    }
    else
      this.setState({ logueado: false })

  })

}



render(){
  return (
    <NavigationContainer>
      
        {this.state.logueado
        ?
        (<NavDrawer.Navigator initialRouteName="Home">
          <NavDrawer.Screen name="Home" component={StackHome}></NavDrawer.Screen>
          <NavDrawer.Screen name="CerrarSesion" component={CerrarSesion}></NavDrawer.Screen>
        </NavDrawer.Navigator>)
        :
        <NavDrawer.Navigator>
           <NavDrawer.Screen name="Login" component={Login}></NavDrawer.Screen>
            <NavDrawer.Screen name="Registro" component={Registrar}></NavDrawer.Screen>
          <NavDrawer.Screen name="CambiarPass" component={CambiarClave}></NavDrawer.Screen>
        </NavDrawer.Navigator>
      }
      </NavigationContainer>
        
     
    
  );
}
}


