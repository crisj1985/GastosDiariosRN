import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableHighlight, Picker } from 'react-native';
import DatePicker from "react-native-datepicker";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { recuperarGastos, agregarIngreso } from "../Gastos";
import { ItemGasto } from '../itemGastos'
import { ModalCategoria } from "../ModalCategorias";

export  class Gasto extends Component {
    constructor() {
        super();
        this.state = {
            gastos: recuperarGastos(),
            id: undefined,
            ingreso: 0,
            categoria: "",
            descripcion: "",
            mostrarActualizar: false,
            mostrarCategoria: false,
        };
    }

    fnRepintar = () => {
        this.setState({ gastos: recuperarGastos() });
    };
    fnLimpiar = () => {
        this.setState({
            id: null,
            ingreso: 0,
            categoria: "",
            descripcion: "",
        });
    };
    fnSeleccionar = (gasto) => {
        this.setState({
            id: gasto.Id.toString(),
            ingreso: gasto.Ingreso.toString(),
            categoria: gasto.Categoria,
            descripcion: gasto.Descripcion,
            mostrarActualizar: true,
        });
    };

    fnValueCategoria = (value) => {
        this.setState({ categoria: value });
    };

    fnLimpiarValueCategoria = () => ""

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ alignItems: "stretch" }}>Gastos</Text>
                <Input
                    label="Id :"
                    placeholder="Id"
                    value={this.state.id}
                    editable={false}
                    leftIcon={
                        <Icon
                            name="key"
                            size={24}
                            color="red"
                            style={styles.icono}
                        />
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
                        <Icon
                            name="money"
                            size={24}
                            color="green"
                            style={styles.icono}
                        />
                    }
                />

                <ModalCategoria
                    valueCategoria={this.fnValueCategoria}
                    tipo='Gastos'
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
                        <Icon
                            name="font"
                            size={24}
                            color="blue"
                            style={styles.icono}
                        />
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
                            icon={
                                <Icon name="refresh" size={22} color="white" />
                            }
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
