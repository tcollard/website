<template>
    <div class="container">
        <div class="clickable" @click="changeLang('en')">
            <p>en</p>
        </div>
        <div>
            <p>|</p>
        </div>
        <div class="clickable" @click="changeLang('fr')">
            <p>fr</p>
        </div>
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
        width: 60px;
    }

    .clickable {
        cursor: pointer;
    }

</style>