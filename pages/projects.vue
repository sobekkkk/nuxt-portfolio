<template>
    <div class="Main">
        <navbar />
        <h1 class="Title">My Projects</h1>
        <div class="l-container">
            <div v-for="e in data" :key="e.id" class="b-game-card">
                <div
                    class="b-game-card__cover"
                    :style="{ backgroundImage: 'url(' + e.image + ')' }"
                ></div>
                <div class="card-content">
                    <h2>{{ e.name }}</h2>
                    <p>{{ e.description }}</p>
                    <p>{{ e.language }}</p>
                    <p>{{ e.created_at }}</p>
                    <p>{{ e.stargazers_count }}</p>
                    <a
                        v-bind:href="e.clone_url"
                        target="_blank"
                        class="dropdown-button"
                    >
                        <span class="button-icon">
                            <img src="../public/icons/github.png" />
                        </span>
                        <span class="button-text">GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import navbar from "../components/navbar.vue";
import { ref, onMounted } from "vue";

const images = [
    "/images/hacktoria.jpg",
    "/images/portfolio.png",
    "/images/profil.png",
    "images/sudoku.png",
    "images/uber.png",
    "images/weather.png",
];
const data = ref([]);
useHead({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
});

onMounted(async () => {
    const response = await fetch("https://api.github.com/users/sobekkkk/repos");
    data.value = await response.json();
    const color = { Java: "#b17215", Markdown: "#a2a1a1", Vue: "#44b581" };
    data.value.forEach((element, index) => {
        if (element.language === null) {
            element.language = "Markdown";
        }
        if (element.created_at) {
            const date = new Date(element.created_at);
            const formattedDate = date.toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
            element.created_at = formattedDate;
        }
        element.image = images[index % images.length];
    });
});
</script>
<style lang="css" scoped>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #353540;
}

.Main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
}

.Title {
    padding-top: 15vh;
    padding-bottom: 12vh;
    color: white;
    font-family: "Nord";
    font-size: 10vh;
}

.l-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    width: 100%;
    max-width: 1200px;
    padding: 30px;
}

@media screen and (max-width: 760px) {
    .l-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

.b-game-card {
    position: relative;
    z-index: 1;
    width: 100%;
    padding-bottom: 150%;
    perspective: 1000px;
    overflow: hidden; /* Empêche le débordement */
}

.b-game-card__cover {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    background-size: cover;
    background-position: center;
    perspective-origin: 50% 50%;
    transform-style: preserve-3d;
    transform-origin: top center;
    will-change: transform;
    transform: skewX(0.001deg);
    transition: transform 0.35s ease-in-out;
}
.b-game-card__cover::after {
    display: block;
    content: "";
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background: linear-gradient(
        226deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.4) 35%,
        rgba(255, 255, 255, 0.2) 42%,
        rgba(255, 255, 255, 0) 60%
    );
    transform: translateY(-20%);
    will-change: transform;
    transition: transform 0.65s cubic-bezier(0.18, 0.9, 0.58, 1);
}

.b-game-card:hover .b-game-card__cover {
    transform: rotateX(7deg) translateY(-6px);
}

.b-game-card:hover .b-game-card__cover::after {
    transform: translateY(0%);
}

.b-game-card::before {
    display: block;
    content: "";
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 6px 12px 12px rgba(0, 0, 0, 0.4);
    will-change: opacity;
    transform-origin: top center;
    transform: skewX(0.001deg);
    transition: transform 0.35s ease-in-out, opacity 0.5s ease-in-out;
}

.b-game-card:hover::before {
    opacity: 0.6;
    transform: rotateX(7deg) translateY(-6px) scale(1.05);
}

.card-content {
    z-index: 10000;
    position: absolute;
    bottom: -100%;
    left: 0;
    right: 0;
    padding: 16px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    font-family: "Roboto", sans-serif;
    transition: transform 0.3s ease, bottom 0.3s ease;
}

.b-game-card:hover .card-content {
    bottom: 0;
}

a {
    text-decoration: none;
}

.dropdown-button {
    display: inline-flex;
    align-items: center;
    background-color: #333;
    color: white;
    margin-top: 10vh;
    padding: 1.1vh 2.2vh;
    border-radius: 4px;
    text-decoration: none;
    font-family: Arial, sans-serif;
    font-size: 16px;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease, width 0.3s ease;
    width: 1.5vw;
}

.button-icon img {
    height: 3vh;
}

.button-icon {
    display: inline-block;
    transition: transform 0.3s ease;
}

.button-text {
    display: inline-block;
    opacity: 0;
    margin-left: 8px;
    transition: opacity 0.3s ease;
    white-space: nowrap;
}

.dropdown-button:hover {
    background-color: #24292e;
    width: 5vw;
}

.dropdown-button:hover .button-text {
    opacity: 1;
}

.dropdown-button:hover .button-icon {
    transform: translateX(-5px);
}
</style>
