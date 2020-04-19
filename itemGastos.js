import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'
import { eliminarIngreso } from "./Gastos";
import { Avatar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export class ItemGasto extends Component {


    render() {
        const {gasto,seleccionar,limpiar,repintar} = this.props;
        const { Id, Ingreso, Categoria, Descripcion } = gasto;
        return (
            <View style={styles.fila}>
                <Avatar
                    style={styles.seccionAvatar}
                    rounded
                    title={Categoria.substring(0, 1)}
                    // source={imagenes[indice]}
                />
                <TouchableHighlight
                    style = {styles.seccionTexto}
                    onPress={() => {
                        seleccionar(gasto);
                    }}
                >
                    <Text>{Ingreso}  {Categoria}  {Descripcion}</Text>

                </TouchableHighlight>
                <Button
                    onPress={() => {
                        eliminarIngreso(gasto);
                        repintar();
                        limpiar();
                        // this.setState({ mostrarActualizar: false })
                    }}
                    icon={<Icon name="trash-o" size={22} color="white" />}
                    style={styles.seccionBotones}
                />
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    fila: {
        borderBottomColor: "blue",
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        flexDirection: "row"
    },
    principal: {
        fontSize: 18,
    },
    secundario: {
        fontSize: 16,
        fontStyle: "italic",
    },
    seccionAvatar: {
        flex: 1,
    },
    seccionTexto: {
        flex: 6,
        flexDirection: 'row'
    },
    seccionBotones: {
        flex: 1,
    },
});
