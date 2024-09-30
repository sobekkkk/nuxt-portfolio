<template>
    <div class="Main">
        <navbar />

        <div class="me">
            <img class="pp" src="../public/images/pp.png" />
            <h1>Sobek</h1>
            <p>Cybersec enthusiast & fullstack dev</p>
        </div>

        <div class="social-media">
            <a href="https://github.com/sobekkkk" target="_blank">
                <img src="../public/icons/github.png" />
            </a>
            <a @click="copyToClipboard">
                <img src="../public/icons/discord.png" />
            </a>
            <a href="mailto:sobek-pro@proton.me">
                <img src="../public/icons/telegram.png" />
            </a>
        </div>

        <Message
            v-if="message.visible"
            :text="message.text"
            :type="message.type"
            :duration="3000"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import navbar from "../components/navbar.vue";

const message = ref({ text: "", type: "info", visible: false });

const copyToClipboard = () => {
    navigator.clipboard
        .writeText(".sobekk.")
        .then(() => {
            showMessage(
                "Username Discord copié dans le presse-papiers !",
                "success"
            );
        })
        .catch((err) => {
            showMessage(
                "Erreur lors de la copie dans le presse-papiers.",
                "error"
            );
            console.error(
                "Erreur lors de la copie dans le presse-papiers:",
                err
            );
        });
};

const showMessage = (text, type) => {
    message.value = { text, type, visible: true };
    setTimeout(() => (message.value.visible = false), 3000);
};

useHead({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
});
</script>

<style scoped>
@font-face {
    font-family: Nord;
    src: url(../public/font/Nord-BlackItalic.woff);
}

@font-face {
    font-family: Roboto;
    src: url(../public/font/Roboto-Mono-regular.woff2);
}

.Main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
}

.pp {
    margin-top: 32.5vh;
    width: 15vh;
    border-radius: 50%;
}

.me {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.me h1 {
    color: rgb(228, 228, 230);
    font-family: Nord;
    margin-top: 4vh;
    font-size: 6vh;
    transition: all 0.5s ease-in-out;
}

.me h1:hover {
    transition: all 0.5s ease-in-out;
    text-shadow: 4px 4px 0 #acacac;
    transform: translate(-2px, -2px);
    letter-spacing: 1vw;
}

.me p {
    margin-top: 1vh;
    font-size: 2.5vh;
    color: rgb(233, 227, 219);
    font-family: Roboto;
}

.social-media {
    height: 15vh;
    width: 20vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.social-media img {
    height: 6vh;
}
.social-media a {
    height: 6vh;
}

.social-media img,
a:hover {
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    height: 7vh;
}
</style>
