export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: ["@nuxt/image", "@nuxtjs/robots"],
    robots: {
        disallow: ["/"],
    },
    css: ["./assets/css/main.css"],
});
