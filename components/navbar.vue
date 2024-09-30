<template>
    <div class="navbar">
        <NuxtLink to="/"><img src="../public/icons/home.png" /></NuxtLink>
        <NuxtLink to="/projects"
            ><img src="../public/icons/layers.png"
        /></NuxtLink>
        <NuxtLink to="/"><img src="../public/icons/padlock.png" /></NuxtLink>
    </div>
</template>

<style scoped>
.navbar {
    z-index: 9000000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 2vh;
    position: fixed;
    background: radial-gradient(
        circle,
        rgb(35, 35, 35) 10%,
        rgba(34, 34, 34, 0.894) 100%
    );

    height: 7vh;
    width: 15vw;
    border: 1px solid #4b4a4a;
    border-radius: 50px 50px 50px 50px;
    -webkit-border-radius: 50px 50px 50px 50px;
}

img {
    filter: opacity(0.5) drop-shadow(0 0 0 rgb(224, 223, 223));
    height: 3vh;
}
</style>
