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

export const fnValidarIngreso = async(email, pass) => {

    try {
        let respuesta = await firebase
            .auth()
            .signInWithEmailAndPassword(email, pass)
        Alert.alert("Usuario registrado correctamente");
    } catch (error) {
        Alert.alert("Error! " + error.message);
    }

}
export const SingOut = async() => {

    try {
        await firebase
            .auth()
            .signOut()
    } catch (error) {
        Alert.alert("Error! " + error.message);
    }
}

export const recuperarClave = async(mail, fnIrLogin) => {

    try {
        await firebase
            .auth()
            .sendPasswordResetEmail(mail)
        Alert.alert("Ingrese a su correo para restaurar la clave");
        fnIrLogin();
    } catch (error) {
        Alert.alert("Error! " + error.message);
    }
}