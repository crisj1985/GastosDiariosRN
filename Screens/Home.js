import React, { Component } from 'react'
import { Text, View, StyleSheet } from "react-native";
import { Button, Icon } from 'react-native-elements'

export  class Home extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Button
              style={styles.seccionBotones}
              title="Gastos"
              onPress={() => {
                this.props.navigation.navigate("StackGastos");
              }}
              icon={
                <Icon
                  name="minus"
                  size={22}
                  color="white"
                  type="font-awesome"
                  style={styles.icono}
                />
              }
              type="solid"
            ></Button>
            <Button
              style={styles.seccionBotones}
              title="Ingresos"
              onPress={() => {
                this.props.navigation.navigate("StackIngresos");
              }}
              icon={
                <Icon name="plus" size={22} color="white" type="font-awesome" />
              }
              type="solid"
            ></Button>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 28,
  },
  icono: {
    marginLeft: 15,
  },
  seccionBotones: {
    flex: 1,
    padding: 10,
    marginTop: 28,
    marginBottom: 28,
  },
});
