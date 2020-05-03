
import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { Input,Button } from 'react-native-elements';
import { fnValidarIngreso} from '../Servicios/ServiciosLogin'

export class Login extends Component {

    constructor(){
        super();
        this.state={
            mail:"",
            password:""
        }
    }

    render() {
        const { mail, password} = this.state;
        const { navigation} = this.props
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <Input
                    label="E-mail"
                    placeholder="E-mail"
                    value={mail}
                    onChangeText={(txt)=>{this.setState({mail:txt})}} 
                />
                <Input
                    label="Password"
                    placeholder="Password"
                    value={password}
                    onChangeText={(txt) => { this.setState({ password: txt }) }}
                />
                <Button
                    title="Ingresar"
                    onPress={() => {
                        fnValidarIngreso(mail,password);
                    }}
                />
                <Button title="Registrar" onPress={() => {
                    navigation.navigate(
                        "Registro"
                    );
                }} />
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
