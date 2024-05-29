let express = require('express');
let mysql = require('mysql');
let cors = require('cors');


let app = express();
app.use(express.json());
app.use(cors());

//Conexion a MySQL - cadena
let conexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'pwdata',
    port: '3306'
});

//Nos conectamos a MySQL
conexion.connect((error) => {
    if (error) {
        throw error;
    }
    console.log("Conectado a la base de datos");
});

//Rutas de acceso
app.get("/", (req, res) => {
    res.send("Ruta de inicio");
});
// Seleccionamos todos los clientes
app.get("/api/clientes", (req, res) => {
    conexion.query('SELECT * FROM clientes', (error, tuplas) => {
        if (error)
            throw error;
        res.send(tuplas);
    });
});

//Seleccionamos un cliente en especifico
app.get('/api/clientes/:id', (req, res) => {
    conexion.query('SELECT * FROM clientes WHERE ID = ?', [req.params.id], (error, tupla) => {
        if (error)
            throw error;
        res.send(tupla);
    });
});

app.delete('/api/clientes/:id', (req, res) => {
    let id = req.params.id;
    conexion.query('DELETE FROM clientes WHERE id=?', [id], (error, tuplas) => {
        if (error)
            throw error
        else
            res.send(tuplas);
    })
});

//Insertar un nuevo cliente
app.post('/api/clientes', (req, res) => {
    let data = {
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        rfc: req.body.rfc,
        curp: req.body.curp,
        cp: req.body.cp
    };
    let sql = 'INSERT INTO clientes SET ?';
    conexion.query(sql, data, (error, tuplas) => {
        if (error)
            throw error
        else
            res.send(tuplas);
    });
});

// Actualizar
app.put('/api/clientes/:id', (req,res) => {
    let id = req.params.id;
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let direccion = req.body.direccion;
    let telefono = req.body.telefono;
    let rfc = req.body.rfc;
    let curp = req.body.curp;
    let cp = req.body.cp;
    let sql = 'UPDATE clientes SET nombre=?,apellido=?,direccion=?,telefono=?,rfc=?,curp=?,cp = ? WHERE id=?';

    conexion.query(sql,[nombre,apellido,direccion,telefono,rfc,curp,cp,id], (error,results) => {
        if(error)
            throw error;
        else
            res.send(results);
    });
});

// Encender servidor
let puerto = 3000;
app.listen(puerto, () => {
    console.log("Servidor escuchando puerto " + puerto);
});