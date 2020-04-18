import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableHighlight } from 'react-native';
import DatePicker from "react-native-datepicker";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { recuperarGastos, agregarIngreso, actualizarIngreso } from "./Gastos";

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

  render(){
    return (
      <View style={styles.container}>
        <Text style={{ alignItems: "stretch" }}>Ingresos</Text>
        <TextInput
          title="Id"
          placeholder="Id"
          value={this.state.id}
          editable = {false}
        />
        <TextInput 
          title="Ingreso" 
          placeholder="Ingreso" 
          value = {this.state.ingreso} 
          onChangeText = {(txt)=>{this.setState({ingreso:txt})}}
        />
          
        <TextInput 
          title="Categoria" 
          placeholder="Categoria"
          value={this.state.categoria} 
          onChangeText={(txt) => { this.setState({ categoria: txt }) }}
          />
          
        <TextInput 
          title="Descripcion" 
          placeholder="Descripcion" 
          value={this.state.descripcion} 
          onChangeText={(txt) => { this.setState({ descripcion: txt }) }}
          />
        {!this.state.mostrarActualizar 
         ?
            <Button
              title="Guardar"
              onPress={() => {
                agregarIngreso({
                  Ingreso: Number(this.state.ingreso),
                  Categoria: this.state.categoria,
                  Descripcion: this.state.descripcion
                });
                this.fnRepintar();
                this.fnLimpiar();
              }}
            />
          :
            <Button 
              title="Actualizar" 
            onPress={() => {
              agregarIngreso({
                Id: Number(this.state.id),
                Ingreso: Number(this.state.ingreso),
                Categoria: this.state.categoria,
                Descripcion: this.state.descripcion
              });
              this.fnRepintar();
              this.setState({mostrarActualizar:false});
              this.fnLimpiar();

              }}  
            />
        } 
        
        
        <FlatList
          data={this.state.gastos}
          renderItem={({ item }) => (
            <TouchableHighlight 
              onPress={() => {
                this.setState({
                  id:item.Id.toString(),
                  ingreso: item.Ingreso.toString(),
                  categoria: item.Categoria,
                  descripcion: item.Descripcion,
                  mostrarActualizar:true})}}>
              <Text>{item.Ingreso}  {item.Categoria}  {item.Descripcion}</Text>
            </TouchableHighlight>
              
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
