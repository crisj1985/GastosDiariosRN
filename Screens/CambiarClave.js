import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { recuperarClave} from '../Servicios/ServiciosLogin'

export class CambiarClave extends Component {

    constructor(){
        super();
        this.state = {
            email:''
        }
    }

irLogin = () => {
    this.props.navigation.goBack();
}

render(){
    return(
        <View style={styles.container}>
            <Text>Recuperar Password</Text>
            <Input
                label="E-mail"
                placeholder="E-mail"
                value= {this.state.email}
                onChangeText={(txt)=>{this.setState({email:txt})}}
                leftIcon={{
                    type: 'font-awesome', name: 'user', color:'lightblue'
                }}
            />
            <Button
                title="Recuperar Password"
                onPress={()=>{
                    recuperarClave(this.state.email, this.irLogin);
                }}
            />
        </View>
    );
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