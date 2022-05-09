<template>
<div class="contact">
    <div class="contactContent">
        <header class="contactTitle"><h1>Contactez-nous</h1></header>
        <form action="post">
            <div class="formContainer">
                <input class="formBtn" type="text" id="name" required placeholder="  Nom / Prenom">    
                <input class="formBtn" type="email" id="email" required placeholder="  Adresse email"> 
                <textarea name="message" id="message" cols="86" rows="6" placeholder="  Entrez votre message"></textarea>
                <input class="submitBtn" type="button" value="Envoyer">
            </div>
        </form>

    </div>
    

</div>
    
</template>

<style scoped>

.contact{
    width: 100%;
    height: 87vh;
}

.contactContent{
    width: 100%;
    height: 87vh;
}

.contactContent .contactTitle{
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contactContent .contactTitle h1{
    font-size: 40px;
}

form{
    width: 100%;
    height: 67vh;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
}

.formContainer{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.contactContent .formBtn{
    font-family: 'Averia Serif Libre', cursive;
    width: 50vh;
    height: 10vh;
    border: none;
}

.submitBtn{
    font-family: 'Averia Serif Libre', cursive;
    width: 30vh;
    height: 10vh;
    font-size: 18px;
    border: none;
    margin-top: 40px;
    color: white;
    background-color: #013560;
}

textarea{
    font-family: 'Averia Serif Libre', cursive;
    border: none;
}

</style>

<script>
export default {
    setup() {
        
    },
}
</script>