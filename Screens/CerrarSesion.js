import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements'
import { SingOut} from '../Servicios/ServiciosLogin'

export class CerrarSesion extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Seguro que desea salir? </Text>
                <Button
                    title="Cerrar sesion"
                    onPress={() => { SingOut()}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
