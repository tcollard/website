<template>
    <div class="title">
        <span class="name">THIBAULT COLLARD</span>
        <h1 class="post">Dev full stack JS</h1>
    </div>
</template>

<script>
export default {
    name: 'JobTitle',
}
</script>

<style scoped>
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

.name {
    font-family: 'Roboto Slab';
    font-weight: bold;
    color: white;
}

.post {
    color: orange;
}

</style>