let express = require('express');
let mysql = require('mysql');
let cors = require('cors');

let app = express();
app.use(express.json());
app.use(cors());

//Conexion a MySQL
let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pwdata',
    port: '3306'
});

//Nos conectamos a MySQL
conexion.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conectado a la base de datos')
    }
});

//Rutas de acceso
app.get("/", function (req, res) {
    res.send("Ruta de inicio")
})

//Seleccionamos todos losclientes
app.get('/api/clientes', (req,res)=>{
    conexion.query('SELECT * FROM clientes',(error, filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
})

//Seleccionamos un cliente
app.get('/api/clientes/:id', (req,res)=>{
    conexion.query('SELECT * FROM clientes WHERE id=?', [req.params.id],(error,fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila);
        }
    });
});

//Encender servidor (Todos los servidores se prenden en el puerto 80 y uno seguro es el 4443)
let puerto = 3000;
app.listen(puerto, function () {
    console.log("Servidor escuchando puerto " + puerto);
})
