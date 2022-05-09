<template>
<div class="popHome">
    <div class="popHomeContent">
        <header class="titlePopHome"><h1>Trouvez votre bien en quelques cliques !</h1></header> 
        <main class="contentPopHome">
            <form action="">
                <input type="text" class="inputBtn" placeholder="  Votre zone de recherche">
                <input type="text" class="inputBtn" placeholder="  Votre budget">
                <input type="submit" class="submitBtn" placeholder="Envoyer" >
            </form>    
        </main>   
    </div>
   

</div>
    
</template>

<style scoped>
    .popHome{
        width: 80vh;
        height: 45vh;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        transition: 1s ease;
        background-color: rgba(244, 243, 243, 0.882);
    }

    .titlePopHome{
        width: 70vh;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .titlePopHome h1{
        font-size: 3vh;
    }

    .contentPopHome{
        width: 100%;
        height: 35vh;
    }

    .contentPopHome form{
        width: 100%;
        height: 30vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }

    form .inputBtn{
        font-family: 'Averia Serif Libre', cursive;
        width: 30vh;
        border: none;
        height: 6vh;
    }

    form .submitBtn{
        font-family: 'Averia Serif Libre', cursive;
        width: 20vh;
        height: 6vh;
        color: white;
        transition: 0.3s ease;
        background-color: #005aa3;
        border: none;
    }

    form .submitBtn:hover{
        background-color: #014780;
    }

    .popHomeContent {
        width: 75vh;
        height: 45vh;
    }

    .popHomeContent h2{
        font-size: 21px;
        line-height: 5vh;
    }


</style>

<script>
import 'aos/dist/aos.css'

export default {
     name: 'PopHome'
 
}
</script>