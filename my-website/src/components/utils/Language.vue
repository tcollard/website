<template>
    <div class="container">
        <div class="clickable" @click="changeLang('en')">
            <p id="en">en</p>
        </div>
        <div>
            <p>|</p>
        </div>
        <div class="clickable" @click="changeLang('fr')">
            <p id="fr" class="boldText">fr</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "LanguageSwitcher",
    methods: {
        changeLang(lang) {
            this.$root.$i18n.locale = lang;
            let elFr = document.getElementById('fr');
            let elEn = document.getElementById('en');
            if (lang == 'fr') {
                elFr.classList.add('boldText');
                elEn.classList.remove('boldText');
            } else if (lang == 'en') {
                elEn.classList.add('boldText');
                elFr.classList.remove('boldText');
            }

        }
    }
}
</script>

<style scoped>
    .clickable {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }

    .boldText {
        font-weight: bold;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 45px;
        margin-left: 2%;
    }
</style>