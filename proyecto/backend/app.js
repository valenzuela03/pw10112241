let express = require('express');
let mysql = require('mysql');
let cors = require('cors');

let app = express();
app.use(express.json());
app.use(cors());

//Rutas de acceso
app.get("/", function(req,res){
res.send("Ruta de inicio")
})

//Encender servidor (Todos los servidores se prenden en el puerto 80 y uno seguro es el 4443)
let puerto = 3000;
app.listen(puerto, function(){
    console.log("Servidor escuchando puerto "+puerto);
})
