import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Comienza FireBase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWmksHoFgFUl3hTAw69ZauBPnRJWRFQ7E",
  authDomain: "programacion-web-ae844.firebaseapp.com",
  projectId: "programacion-web-ae844",
  storageBucket: "programacion-web-ae844.appspot.com",
  messagingSenderId: "359613767104",
  appId: "1:359613767104:web:9ed43339ae14e1639e3c25"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// Termina FireBase


const app = createApp(App)

app.use(router);

app.mount('#app')
