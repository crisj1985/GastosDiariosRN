import firebase from 'firebase';



 export const cargarConfiguration = () => {
                                     // Your web app's Firebase configuration
                                     const firebaseConfig = {
                                       apiKey:"AIzaSyDV3n0OpdjTix2gFgReRLmnyfbyrurwSKY",
                                       authDomain:"gastospersonales-d0ca2.firebaseapp.com",
                                       databaseURL:"https://gastospersonales-d0ca2.firebaseio.com",
                                       projectId: "gastospersonales-d0ca2",
                                       storageBucket:"gastospersonales-d0ca2.appspot.com",
                                       messagingSenderId: "435919378992",
                                       appId:"1:435919378992:web:78c6aab0ac1ccfaedaabf5",
                                     };
                                     // Initialize Firebase
                                     firebase.initializeApp(firebaseConfig);
                                     global.estaConfigurado = true;
                                   }
 
