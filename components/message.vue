<template>
    <div v-if="visible" :class="['message', type]" @click="closeMessage">
        {{ text }}
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    text: String,
    type: {
        type: String,
        default: "info",
    },
    duration: {
        type: Number,
        default: 2000,
    },
});

const visible = ref(true);

const closeMessage = () => {
    visible.value = false;
};

setTimeout(closeMessage, props.duration);
</script>

<style scoped>
@font-face {
    font-family: Roboto;
    src: url(../public/font/Roboto-Mono-regular.woff2);
}

.message {
    font-family: Roboto;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    z-index: 1000;
    animation: fade-in-out 2s;
}

.message.info {
    background-color: #409eff;
}

.message.success {
    background-color: #67c23a;
}

.message.warning {
    background-color: #e6a23c;
}

.message.error {
    background-color: #f56c6c;
}

@keyframes fade-in-out {
    0%,
    100% {
        opacity: 0;
    }
    20%,
    80% {
        opacity: 1;
    }
}
</style>
