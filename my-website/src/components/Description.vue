<template>
    <div class="description">
            <h2>{{ $t('about.title') }}</h2>
        <div class="descriptionContent">
            <p>{{ $t('about.content') }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Description',
}
</script>

<style scoped>
    .description {
        display: flex;
        flex-direction: column;
        padding: 8% 10% 8% 10%;
    }   
    
    .descriptionContent {
        padding: 0% 2% 0% 2%;
        text-align: center;
    }   
    
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
        }
    }
</style>