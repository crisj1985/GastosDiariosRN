
import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { Input,Button } from 'react-native-elements';

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
                    }}
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
