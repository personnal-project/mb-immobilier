<template>
<div class="popHome">
    <div class="popHomeContent">
         <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
    </div>
   

</div>
    
</template>

<style scoped>
    .popHome{
        width: 50%;
        height: 60vh;
        border-radius: 10px;
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        transition: 1s ease;
        background-color: rgba(244, 243, 243, 0.923);
    }

    .popHomeContent {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80%;
    }

    .popHomeContent h2{
        font-size: 21px;
        line-height: 25px;
    }


</style>

<script>
import 'aos/dist/aos.css'

export default {
     name: 'PopHome'
 
}
</script>