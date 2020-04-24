import React, {Component} from 'react'
import { FlatList, StyleSheet, View, Text} from 'react-native';
import {ItemGasto} from '../itemGastos'
import { recuperarGastos } from "../Gastos";

export class Listado extends Component {

    constructor(){
        super();
        this.state = {
            listaGastos: recuperarGastos(),
            id: undefined,
            ingreso: 0,
            categoria: "",
            descripcion: "",
        }
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

render(){
    return (
        <View style={styles.container}>
            <Text>Listado de Movimientos</Text>
            <FlatList
                
                data={this.state.listaGastos}
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