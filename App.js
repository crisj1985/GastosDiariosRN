import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableHighlight } from 'react-native';
import DatePicker from "react-native-datepicker";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { recuperarGastos, agregarIngreso } from "./Gastos";
import { ItemGasto} from './itemGastos'

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      gastos: recuperarGastos(),
      id:undefined,
      ingreso:0,
      categoria:'',
      descripcion:'',
      mostrarActualizar:false

    };
  }

  fnRepintar =  () => {
    this.setState({ gastos: recuperarGastos()})
  }
  fnLimpiar = () => {
    this.setState({
      id: null,
      ingreso: 0,
      categoria: '',
      descripcion: '',

    })
  }
  fnSeleccionar = (gasto) => {
      this.setState({
        id: gasto.Id.toString(),
        ingreso: gasto.Ingreso.toString(),
        categoria: gasto.Categoria,
        descripcion: gasto.Descripcion,
        mostrarActualizar: true
      });
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={{ alignItems: "stretch" }}>Ingresos</Text>
        <Input
          label="Id :"
          placeholder="Id"
          value={this.state.id}
          editable={false}
          leftIcon={
            <Icon name="key" size={24} color="red" style={styles.icono} />
          }
        />
        <Input
          label="Ingreso :"
          placeholder="Ingreso"
          value={this.state.ingreso}
          onChangeText={(txt) => {
            this.setState({ ingreso: txt });
          }}
          leftIcon={
            <Icon name="money" size={24} color="green" style={styles.icono} />
          }
        />

        <Input
          label="Categoria :"
          placeholder="Categoria"
          value={this.state.categoria}
          onChangeText={(txt) => {
            this.setState({ categoria: txt });
          }}
          leftIcon={
            <Icon
              name="folder-open-o"
              size={24}
              color="gold"
              style={styles.icono}
            />
          }
        />

        <Input
          title="Descripcion :"
          label="Descripcion"
          placeholder="Descripcion"
          value={this.state.descripcion}
          onChangeText={(txt) => {
            this.setState({ descripcion: txt });
          }}
          leftIcon={
            <Icon name="font" size={24} color="blue" style={styles.icono} />
          }
        />
        {!this.state.mostrarActualizar ? (
          <Button
            onPress={() => {
              agregarIngreso({
                Ingreso: Number(this.state.ingreso),
                Categoria: this.state.categoria,
                Descripcion: this.state.descripcion,
              });
              this.fnRepintar();
              this.fnLimpiar();
            }}
            icon={<Icon name="save" size={22} color="white" />}
          />
        ) : (
          <Button
            onPress={() => {
              agregarIngreso({
                Id: Number(this.state.id),
                Ingreso: Number(this.state.ingreso),
                Categoria: this.state.categoria,
                Descripcion: this.state.descripcion,
              });
              this.fnRepintar();
              this.setState({ mostrarActualizar: false });
              this.fnLimpiar();
            }}
            icon={<Icon name="refresh" size={22} color="white" />}
          />
        )}

        <FlatList
          data={this.state.gastos}
          renderItem={({ item }) => (
            <ItemGasto
              gasto={item}
              seleccionar={this.fnSeleccionar}
              limpiar={this.fnLimpiar}
              repintar={this.fnRepintar}
            />
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
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 28,
  },
  icono: {
    marginRight: 15,
  },
});
