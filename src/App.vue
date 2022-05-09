<template>
<div class="app">
  <Navigation/>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</div>
</template>

<style>
.app {
  width: 100%;
  height: 100vh;
  background-color: rgb(238, 238, 238);
  font-family: 'Averia Serif Libre', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active{
  transition: all 0.3s ease-out;
}

.route-leave-to{
    opacity: 0;
    transform: translateX(-100px);
}
.route-leave-active{
    transition: all 0.3s ease-out;
}

</style>

<script>

import Navigation from '@/components/Navigation.vue';

export default {
  components: { Navigation },

}
</script>
