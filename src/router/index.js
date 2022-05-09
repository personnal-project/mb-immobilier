import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AreUs from '../views/AreUs.vue'
import AcheterProp from '../views/AcheterProp.vue'
import LouerProp from '../views/LouerProp.vue'
import VendreProp from '../views/VendreProp.vue'
import Louer from '../views/Louer.vue'
import Acheter from '../views/Acheter.vue'
import Vendre from '../views/Vendre.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },


  {
    path: '/qui-sommes-nous',
    name: 'areUs', 
    component: AreUs
  },

  {
    path: '/achat-prop',
    name: 'achatProp',
    component: AcheterProp
  },

  {
    path: '/vendre-prop',
    name: 'vendreProp',
    component: VendreProp
  },

  {
    path: '/louer-prop',
    name: 'louePropr',
    component: LouerProp
  },


  {
    path: '/louer',
    name: 'louer',
    component: Louer
  },


  {
    path: '/acheter',
    name: 'acheter',
    component: Acheter
  },


  {
    path: '/vendre',
    name: 'vendre',
    component: Vendre
  },


  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
