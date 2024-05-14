<template>
    <div class="container mt-5">
        <div class="card">
            <h4>Agregar clientes</h4>
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
                <button class="btn btn-primary">Guardar</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClientesCreate",
        data(){
            return{
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
        }
    }
</script>