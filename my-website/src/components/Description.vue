<template>
    <div class="description">
        <div class="title">
            <h1>À propos</h1>
        </div>
        <div class="descriptionContent text">
            <span class="text">
                {{description}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Description',
    data () {
        return {
            description: 'Aprés un parcours en ingénierie du bâtiment et des énergies, 42 m\'a offert l\'opportunité de découvrir et de me former au monde de l\'informatique.'
        }
    }
}
</script>

<style scoped>
/* Web */
@media only screen and (min-width: 480px) {
    .description {
        margin-top: 300px;
    }
}
/* Phone */
@media only screen and (max-width: 480px) {
    .description {
        margin-top: 125%;
        width: 100%;
    }
}

    .description {
        display: flex;
        flex-direction: column;
        padding: 8% 10% 8% 10%;
    }


    .title {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 5%;
    }

    .descriptionContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding: 2%;
        border-radius: 10px;
        text-align: center;
    }

</style>