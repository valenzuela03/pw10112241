import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientesView from "../views/ClientesView.vue"
import ClientesCreateView from '../views/ClientesCreateView.vue'
import ClientesEditarView from '../views/ClientesEditarView.vue'
import RegistroView from '../views/RegistroView.vue'
import EntradaView from "../views/EntradaView.vue"
import NoAutorizaView from '../views/NoAutorizaView.vue'

import {getAuth} from 'firebase/auth'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesView
    },
    {
      path: '/clientes/create',
      name: 'clientescreate',
      component: ClientesCreateView,
      meta:{
        requireAuth: true
      }
    },
    {
      path: '/clientes/:id/edit',
      name: 'clienteseditar',
      component: ClientesEditarView
    },
    {
      path: '/clientes/registro',
      name: 'clientesregistro',
      component: RegistroView
    },
    {
      path: '/clientes/noautoriza',
      name: 'noautoriza',
      component: NoAutorizaView
    },
  ]
})
 //Analizamos todas las rutas antes de que se ejecuten
router.beforeEach((to,from,next) => {
  //Si alguna ruta tiene meytarequireAuth
  if(to.matched.some((record) => record.meta.requireAuth)){
    //Si existe un usuario ergistrado
    if(getAuth().currentUser){
      next(); //continuar sin problemas
    }else{
      alert("Acceso no autorizado");  //alert("Acceso no autorizado")
    }
  }else{  //si no tiene la etiqueta meta
    next();
  }
})
 
export default router