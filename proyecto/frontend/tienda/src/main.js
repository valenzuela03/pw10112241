import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Comienza Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrhXq2W1oWzWFf601RT1MsLUqTN8FHK5Q",
    authDomain: "programacion-web-b31d2.firebaseapp.com",
    projectId: "programacion-web-b31d2",
    storageBucket: "programacion-web-b31d2.appspot.com",
    messagingSenderId: "1010812925088",
    appId: "1:1010812925088:web:67c587f938fb56d26445c5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//Termina Firebase

const app = createApp(App)

app.use(router)

app.mount('#app')
