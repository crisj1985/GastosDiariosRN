import firebase from "firebase";
import { Alert } from "react-native";

export const fnCrearUsuarioFireBase = async(email, pass, fnIrLogin) => {
    try {
        let respuesta = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, pass)
        Alert.alert("Usuario Creado!");
        fnIrLogin();
    } catch (error) {
        Alert.alert("Error! " + error.message);
        console.log("Error! " + error.message);
    }
}