<template>
<div class="connexion">

        <div class="connexionForm">
            <header><h1 class="titleConnexion">Connexion</h1></header>
            <div class="contentConnexion">
                <form action="">
                    <input class="formInput" type="text" placeholder="  Adresse Email">
                    <input class="formInput" type="text" placeholder="  Mot de passe">
                    <input class="formSubmit" type="submit" placeholder="Envoyer">
                </form>
            </div>
            <footer><h1 class="footerConnexion">Pas encore de compte ? <router-link class="shortInscription" to="/creer-un-compte">Créer le votre</router-link></h1></footer>
        </div>

</div>

    
</template>

<style scoped>
   
   .connexion{
        width: 100%;
        height: 87vh;
        background-color: #005aa3;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .connexionForm{
        width: 60vh;
        height: 60vh;
        border-radius: 10px;
        background-color: rgb(235, 235, 235);
    }

    .connexionForm .titleConnexion{
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4vh;
    }

    .connexionForm .contentConnexion{
        width: 100%;
        height: 40vh;


    }

    .contentConnexion form {
        width: 100%;
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .contentConnexion form .formInput {
        font-family: 'Averia Serif Libre', cursive;
        width: 45vh;
        height: 7vh;
        border: 1px solid rgb(143, 143, 143);
        background-color: white;
    }

    .contentConnexion form .formSubmit {
        width: 20vh;
        height: 5vh;
        font-family: 'Averia Serif Libre', cursive;
        border: none;
        color: white;
        transition: 0.3s ease;
        background-color: #004277;
    }

    .contentConnexion form .formSubmit:hover{
        background-color: #006cc4;
    }

    .footerConnexion{
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footerConnexion .shortInscription{
        color: black;
        margin-left: 10px;
    }

</style>

<script>
export default {
   name: 'Login'
}
</script>