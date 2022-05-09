import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'aos/dist/aos.css'
import AOS from 'aos'


createApp(App).use(store).use(router).mount('#app')
new Vue({
    render: (h) => h(App),
    mounted() {
      AOS.init()
    },
  }).$mount('#app')
