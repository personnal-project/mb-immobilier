<template>
    <div class="louerProp">
        <div class="appart">
            <div class="appartContent">Appartement</div>
        </div>
        <div class="maison">
            <div class="maisonContent">Maison</div>
        </div>
        <div class="terrain">
            <div class="terrainContent">Terrain</div>
        </div>
    </div>
    
</template>

<style scoped>
    .louerProp{
        width: 100%;
        height: 87vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: rgb(238, 238, 238);
    }

    .maison,.terrain,.appart{
        width: 35vh;
        height: 35vh;
        border-radius: 35vh;
        display: flex;
        color: white;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        background-color: #003b6b;
    }

    .louerProp{
        font-size: 20px;
    }

</style>

<script>
export default {
    name: 'LouerProp'
        
    
}
</script>