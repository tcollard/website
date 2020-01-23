<template>
    <div class="container">
        <div @click="changeLang('en')">en</div>
        <div>|</div>
        <div @click="changeLang('fr')">fr</div>
    </div>
</template>

<script>
export default {
    name: "LanguageSwitcher",
    methods: {
        changeLang(lang) {
            this.$root.$i18n.locale = lang;
        }
    }
}
</script>

<style scoped>

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        color: orange;
        cursor: pointer;
    }
    @media only screen and (min-width: 480px) {
        .container {
            width: 60px;
        }
    }

    @media only screen and (max-width: 480px) {
        .container {
            width: 30%;
        }
    }
</style>