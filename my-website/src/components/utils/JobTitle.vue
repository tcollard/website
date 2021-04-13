<template>
    <div class="title">
        <h1 class="name">THIBAULT COLLARD</h1>
        <h3 class="post">{{ $t('jobTitle.post')}}</h3>
    </div>
</template>

<script>
export default {
    name: 'JobTitle',
}
</script>

<style scoped>
    .post {
        color: orange;
    }
    
    .title {
        position: fixed;
        margin-top: 100px;
        text-align: center;
        width: 100%;
        z-index: 0;
    }
    
    @media only screen and (max-width: 1024px){
        .name {
            font-size: 18.5vw;
        }
    }
    
    @media only screen and (min-width: 1024px){
        .name {
            font-size: 4.5em;
        }
    }
</style>