<template>
    <div class="description">
        <div class="title">
            <h1>{{ $t('about.title') }}</h1>
        </div>
        <div class="descriptionContent text">
            <span class="text">
                {{ $t('about.content') }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Description',
}
</script>

<style scoped>
/* Web */
@media only screen and (min-width: 1024px) {
    .description {
        margin-top: 300px;
    }
}
/* Phone */
@media only screen and (max-width: 1024px) {
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