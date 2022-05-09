<template>
  <div class="home">
    <div class="homeContent">
      <img src="../assets/home.jpg" >
      <transition name="zoom">
        <PopHome />
      </transition> 
    </div>
  </div>
</template>

<style scoped>
.home{
  width: 100%;
  height: 87vh;
  background-color: rgb(238, 238, 238);
}

.homeContent{
  widows: 50%;
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.homeContent img{
  width: 100%;
  height: 100%;
}

.homeContent .houseBtn{
  width: 30vh;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30vh;
  background-color: #013560;
}

.houseBtn i{
  font-size: 70px;
  color: white;
}


</style>

<script>

import PopHome from '@/components/PopHome.vue'


export default {
  name: 'Home',
  components: { PopHome },

}
</script>
