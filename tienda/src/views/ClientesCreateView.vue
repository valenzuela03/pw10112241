<template>
    <div class="container mt-5">
        <div class="card">
            <h4>Agregar clientes</h4>
             <div v-if="mensaje == 1" class="alert alert-success" role="alert">  <!-- MENSAJE DE EXITO -->
                Datos guardados con exito
            </div>
        </div>
        <div class="card-body">
            <div class="mb-3">
                Id
                <input type="text" class="form-control" v-model="model.cliente.id">
            </div>
            <div class="mb-3">
                Nombre
                <input type="text" class="form-control" v-model="model.cliente.nombre">
            </div>
            <div class="mb-3">
                Direccion
                <input type="text" class="form-control" v-model="model.cliente.direccion">
            </div>
            <div class="mb-3">
                Telefono
                <input type="text" class="form-control" v-model="model.cliente.telefono">
            </div>
            <div class="mb-3">
                RFC
                <input type="text" class="form-control" v-model="model.cliente.rfc">
            </div>
            <div class="mb-3">
                <button class="btn btn-primary" @click="guardarClientes()">Guardar</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "ClientesCreate",
        data(){
            return{
                mensaje: 0, //para mostrar mensaje de exito
                model:{
                    cliente:{
                    id: '',
                    Nombre: '',
                    Direccion: '',
                    Telefono: '',
                    RFC: ''
                }
                }
            }
        },
        methods:{
            guardarClientes(){
                axios.post('http://localhost:3000/api/clientes', this.model.cliente)
                .then(res => {
                    //si insertamos 1 registro
                    if(res.data.affectedRows == 1){ 
                        //limpiamos los cuadros de texto
                        this.model.cliente = {
                         id: '',
                         Nombre: '',
                         Direccion: '',
                         Telefono: '',
                         RFC: ''
                        }
                        this.mensaje = 1; //para mostrar mensaje de exito
                    }
                })
            }
        }
    }
</script>