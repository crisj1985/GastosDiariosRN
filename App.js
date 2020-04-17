import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import DatePicker from "react-native-datepicker";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { recuperarGastos } from "./Gastos";

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      gastos: recuperarGastos(),
    };
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={{ alignItems: "stretch" }}>Ingresos</Text>
        <TextInput title="Ingreso" placeholder="Ingreso" />
        <TextInput title="Categoria" placeholder="Categoria" />
        <TextInput title="Descripcion" placeholder="Descripcion" />
        <Button title="Guardar" />
        <Button title="Actualizar" />
        <FlatList
          data={this.state.gastos}
          renderItem={({ item }) => (
            <Text>
              {item.Ingreso}  {item.Categoria}  {item.Descripcion}
            </Text>
          )}
          keyExtractor={(item) => item.Id}
        />
      </View>
    );
  }
  
}

class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { date: null };
  }

  render() {
    return (
      <DatePicker
        style={{ width: 200 }}
        date={this.state.date}
        mode="date"
        placeholder="Seleccionar fecha"
        format="YYYY-MM-DD"
        minDate="2000-05-01"
        maxDate="2030-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
          this.setState({ date: date });
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginLeft:10,
    marginTop:2,
    padding:10
  },
});
