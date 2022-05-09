<template>
    <header class="navigation">
        <div class="logo">
            <router-link to="/"><a href=""><span>MB</span>immobilier</a></router-link>
            
        </div>
        <div class="bar">
            <div class="navBtn">
                <router-link to="/"><a>Accueil</a></router-link>
            </div>
            
            <div class="navBtn">
                <router-link to="/qui-sommes-nous"><a>Qui sommes-nous ?</a></router-link>
            </div>
            
            <div class="navBtn">
                <router-link to="/achat-prop"><a>Acheter</a></router-link>
            </div>
            
            <div class="navBtn">
                 <router-link to="/louer-prop"><a>Louer</a></router-link>
            </div>

            <div class="navBtn">
                <router-link to="/vendre-prop"> <a>Vendre</a></router-link>
            </div>
            
            <div class="navBtn">
                <router-link to="/contact"> <a>Contact</a></router-link>
            </div>
        </div>
        <div class="user">
            <i class="bi bi-person-fill"></i>
        </div>

    </header>
    
</template>

<style scoped>
.navigation{
    width: 100%;
    height: 13vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navigation .logo{
    width: 18%;
    height: 13vh;
    display: flex;
    justify-content: center;
    align-items: center;

}

.logo a{
    font-size: 14px;
    color: black;
    text-decoration: none;
}

.logo a span{
    color: #005aa3;
    margin-right: 4px;
    font-size: 40px;
}

.navigation .bar{
    width: 50%;
    height: 13vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.bar .navBtn{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3vh;
    cursor: pointer;
    transition: 0.1s ease-in-out;
}

.bar .navBtn a{
    text-decoration: none;
}

.bar a{
    color: black;
    transition: 0.3s;
}

.bar a:hover{
    transform: scale(1.07);
    color: #005aa3;
}

.navigation .user{
    width: 18%;
    height: 13vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navigation .user .bi-person-fill{
    font-size: 35px;
    cursor: pointer;
    color: black;
}

</style>

<script>

export default {
 name: 'Navigation'
}
</script>