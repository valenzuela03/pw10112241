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
app.get('/api/clientes', (req, res) => {
    conexion.query('SELECT * FROM clientes', (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
})

//Seleccionamos un cliente
app.get('/api/clientes/:id', (req, res) => {
    conexion.query('SELECT * FROM clientes WHERE id=?', [req.params.id], (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    });
});

//ELIMINA
app.delete('/api/clientes/:id', (req, res) => {
    let id = req.params.id;
    conexion.query('DELETE FROM clientes WHERE id=?', [id], (error, filas) => {
        if(error){
            throw error
        } else {
            res.send(filas)
        }
    })
});

//INSERTAR UN NUEVO CLIETNE
app.post('/api/clientes/', (req, res) => {
    let data = {
        id:req.body.id,
        nombre:req.body.nombre,
        direccion:req.body.direccion,
        rfc:req.body.rfc
    }
    let sql = "INSERT INTO clientes SET ?";
    conexion.query(sql, data, (error, resultado) => {
        if(error){
            throw error;
        } else {
            res.send(resultado);
        }
    })
});

//Encender servidor (Todos los servidores se prenden en el puerto 80 y uno seguro es el 4443)
let puerto = 3000;
app.listen(puerto, function () {
    console.log("Servidor escuchando puerto " + puerto);
})
