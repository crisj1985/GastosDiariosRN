import React, { Component } from 'react'
import {
  Text,
  View,
  Modal,
  Picker,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from "react-native";
import {  Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {CategoriasGastos,CategoriasIngresos} from './Gastos'

export  class ModalCategoria extends Component {

  

    constructor(){
        super();
    
        this.state = {
          modalVisible: false,
          categoria: "",
          ItemsIngresos: CategoriasIngresos(),
          ItemsGastos: CategoriasGastos(),
        };
    }

     fnDevolverCategoria = (value) => {
       switch(value){
         case 'Ingresos':
            return this.state.ItemsIngresos.map((item) => <Picker.Item label={item} value={item} />)
            break;
            case 'Gastos':
            return this.state.ItemsGastos.map((item) => <Picker.Item label={item} value={item} />)
            break;
       }
       
     }
    render() {

            const { valueCategoria, tipo } = this.props;
        return (
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setState({ categoria: "" });
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Picker
                    selectedValue={this.state.categoria}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => {
                      this.setState({
                        modalVisible: false,
                        categoria: itemValue,
                      });
                      valueCategoria(itemValue);
                    }}
                  >
                    
                    {
                      this.fnDevolverCategoria(tipo)
                    }
                  </Picker>
                </View>
              </View>
            </Modal>
            <TouchableHighlight
              //   style={styles.openButton}
              onPress={() => this.setState({ modalVisible: true })}
            >
              <Input
                label="Categoria :"
                placeholder="Categoria"
                value={this.state.categoria}
                editable={false}
                onChangeText={(txt) => {
                  //   this.setState({ categoria: txt, mostrarCategoria: true });
                }}
                leftIcon={
                  <Icon
                    name="list"
                    size={22}
                    color="purple"
                    style={styles.icono}
                  />
                }
              />
            </TouchableHighlight>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
